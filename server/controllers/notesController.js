import Note from "../database/models/notes.js";

export const displayNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addNotes = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newNote = new Note({
      title,
      description,
    });

    const savedNote = await newNote.save();

    res.status(201).json({
      status: 201,
      message: "notes created succefully",
      data: savedNote,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.query.id)
      .then(() => {
        res.json({ message: "Note Deleted" });
      })
      .catch((err) => {
        throw new Error("Note not found");
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
