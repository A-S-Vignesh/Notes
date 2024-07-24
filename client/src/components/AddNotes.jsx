import React, { useState } from "react";
import useAddNotes from "../hooks/useAddNotes";


function AddNotes({ setNotesData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addNotes = useAddNotes();

  const addData = () => {
    if (title !== "" && description !== "") {
      addNotes(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-6 sm:gap-x-10 lg:gap-x-16">
          <div className="flex w-full sm:w-[390px] rounded-md max-h-max gap-2 mb-6 flex-col bg-white shadow-md p-4 border-2 dark:bg-gray-800 dark:text-white dark:border-gray-800">
            <input
              type="text"
              className="p-2 dark:bg-gray-800 dark:text-white"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-lg p-2 dark:bg-gray-800 dark:text-white"
              placeholder="Description"
            ></textarea>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={addData}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNotes;
