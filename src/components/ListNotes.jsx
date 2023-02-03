import React from 'react'
import ItemNotes from './ItemNotes'

function ListNotes({notes, onDelete}) {
  return (
    <div>
        {
            notes?.map(note => <ItemNotes note={note} key={note.id} onDelete={onDelete}/>)
        }
    </div>
  )
}

export default ListNotes