import React, { useState } from "react";
import DisplayNotesBox from "./DisplayNotesBox";
import useStore from "../zustand/useStore";

function DisplayNotes() {
  const {notes,setNotes} = useStore();
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-6 sm:gap-x-10 lg:gap-x-16">
        {notes?.map((data) => (
          <DisplayNotesBox
            key={data._id}
            id={data._id}
            title={data.title}
            content={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayNotes;
