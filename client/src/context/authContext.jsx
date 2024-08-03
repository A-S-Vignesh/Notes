// context/authContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import useStore from "../zustand/useStore";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { notes, setNotes } = useStore();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("jwt", token);
    }
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.user);
          setUser(response.data.user);
        })
        .catch(() => setUser(null));
    }
  }, []);

  const signIn = () => {
    console.log(
      "Redirecting to backend " +
        import.meta.env.VITE_API_URL +
        "/api/auth/google"
    );
    window.location.assign(`${import.meta.env.VITE_API_URL}/api/auth/google`);
  };

  const signOut = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        localStorage.removeItem("jwt");
        setUser(null);
        setNotes(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
