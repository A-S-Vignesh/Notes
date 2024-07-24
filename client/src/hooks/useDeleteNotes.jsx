import { useState, useCallback, useEffect } from "react";
import useStore from "../zustand/useStore";
import useFetchNotes from "./useFetchNotes";
import { deleteNoteAPI, getNotesAPI } from "../utils/constant";

const useDeleteNotes = () => {
  const { setNotes } = useStore();
  const deleteNotes = async (id) => {
    console.log(id);
    try {
      const response = await fetch(deleteNoteAPI(id), {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
      const rawdata = await fetch(getNotesAPI);
      const data = await rawdata.json();
      setNotes(data);
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  return deleteNotes;
};

export default useDeleteNotes;
