import { getNotesAPI } from "../utils/constant";
import useStore from "../zustand/useStore";

function useAddNotes() {
    const {notes,setNotes} = useStore()
  const addNotes = async (title,description) => {
    try {
      const response = await fetch(getNotesAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const rawdata = await fetch(getNotesAPI,{credentials:"include"});
      const data = await rawdata.json();
      setNotes(data);
      console.log(await response.json());
    } catch (err) {
      console.log(err);
    }
    };
    return addNotes;
}

export default useAddNotes;
