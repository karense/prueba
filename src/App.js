import { useContext, useState } from 'react'
import './App.css';
import {NoteContext} from './context/notes' 
import ListNotes from './components/ListNotes'

function App() {

  const [notes, setNotes] = useContext(NoteContext)
  const [count, setCount] = useState(0)

  const [valueInput, setValueInput] = useState('')
  const [valueIdInput, setValueIdInput] = useState('')

  const addNote = (description) => {
    const note = {
      id: count,
      description
    }

    setNotes([...notes, note])
  }

  const deleteNote = (id) => {
    const noteFilter = notes.filter(note => note.id !== id)
    setNotes(noteFilter)
  }

  const updateNote = ({id, description}) => {
    const notesUpdated = notes.map(note => note.id === id ? {...note, description}: note)
    setNotes(notesUpdated)
  }


  const handleChangeInput = (event) => {
    setValueInput(event.target.value)
  }

  const handleChangeInputId = (event) => {
    setValueIdInput(event.target.value)
  }

  const onAddAction = (event) => {
    if(valueIdInput != ""){
      const note = {
        id: parseInt(valueIdInput), 
        description: valueInput
      }
      updateNote(note)
    }else{
      addNote(valueInput)
    setCount(prev => prev + 1)
    }
    
    event.preventDefault()
  }

  
  return (
    <div className="App">
      <form onSubmit={onAddAction}>
        <input type="text"  value={valueIdInput}  onChange={handleChangeInputId} placeholder="Id"/>
        <input  type='text' value={valueInput}  onChange={handleChangeInput} placeholder="description"/>
        <button type='submit' >Agregar</button>
      </form>
      <ListNotes notes={notes} onDelete={deleteNote}/>
    </div>
  );
}

export default App;
