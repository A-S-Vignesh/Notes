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
        credentials: "include", // This is necessary to send cookies with the request
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error(data.message || "Server Error");
      }
      const rawdata = await fetch(getNotesAPI);
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
