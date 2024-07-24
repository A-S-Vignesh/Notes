import React from "react";
import useDeleteNotes from "../hooks/useDeleteNotes";
import DeleteNotes from "./DeleteNotes";

function DisplayNotesBox({ id, title, content }) {

  return (
    <div className="flex w-full sm:w-[390px] rounded-md max-h-max gap-2 mb-6 flex-col bg-white shadow-md p-4 border-2 dark:bg-gray-800 dark:text-white dark:border-gray-800">
      <h1 className="text-3xl">{title}</h1>
      <h3 className="text-lg">{content}</h3>
      <DeleteNotes id={ id} />
    </div>
  );
}

export default DisplayNotesBox;
