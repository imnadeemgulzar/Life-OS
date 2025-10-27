import React from 'react'
import NoteItem from '../components/NoteItem'

const Notes = ({notes}) => {
  return (
    <div className='px-8 py-4 rounded-sm h-screen'>
      <h2 className='text-2xl font-bold text-[#101828] mb-4'>All Notes</h2>
      <ul className='gap-6 flex flex-wrap'>
          {notes.map((note) => {
            return <li className='px-3 py-2 bg-white rounded shadow-lg w-72' key={note.id}><NoteItem  note={note}/></li>
          })}
        </ul>
    </div>
  )
}

export default Notes
