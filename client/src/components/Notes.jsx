import React,{useState} from 'react'
import AddNotes from './AddNotes'
import DisplayNotes from './DisplayNotes'
import useFetchNotes from '../hooks/useFetchNotes';


function Notes() {
  return (
      <div>
      <AddNotes />
      <DisplayNotes />
      </div>

  )
}

export default Notes