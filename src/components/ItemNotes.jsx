import React from 'react'

function ItemNotes(props) {
    const { note, onDelete } = props

  return (
    <div>
         <p>{note.description}</p>
         <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  )
 
}

export default ItemNotes