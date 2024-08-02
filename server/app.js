import express from "express";
import connectDB from "./database/database.js";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/index.js";
import passport from "passport";


dotenv.config();

const PORT = process.env.PORT||5500;
const app = express()




app.use(express.json())
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);


connectDB();



app.get("/", (req, res) => {
  res.send("Server is live at " + process.env.FRONTEND_URL + " port");
})

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port `+PORT);
});

