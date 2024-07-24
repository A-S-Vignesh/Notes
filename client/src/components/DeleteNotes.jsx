import React from "react";
import useDeleteNotes from "../hooks/useDeleteNotes";

function DeleteNotes(props) {
    const deleteNotes = useDeleteNotes();
    const handleDeleteClick = () => {
      deleteNotes(props.id);
    };


  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-700"
      onClick={handleDeleteClick} // Use the handler for delete operation
    >
      Delete
    </button>
  );
}

export default DeleteNotes;
