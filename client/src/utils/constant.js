export const getNotesAPI = `${import.meta.env.VITE_API_URL}/api/notes`;

export const deleteNoteAPI = (id) =>
  `${import.meta.env.VITE_API_URL}/api/notes?id=${id}`;
