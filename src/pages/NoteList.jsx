import React, { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton'
import NoteListComponent from '../components/NoteList/NoteListComponent'
import MyModal from '../components/modal/MyModal'
import AddForm from '../components/AddForm/AddForm'

const NoteList = () => {
    const [notes, setNotes] = useState([
        {id : 1, body : 'loremloremloremloremloremloremloremlorem'},
        {id : 2, body : 'loremloremloremloremloremloremloremlorem'},
        {id : 3, body : 'loremloremloremloremloremloremloremlorem'},
    ])
    const [inputValue, setInputValue] = useState('')
    const [modalValue, setModalValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [id, setId] = useState('')
    const setPost = (e, id)=>{
        e.preventDefault()

        if(id){
            const currNote = notes.filter(note=>note.id == id)
            currNote[0].body = modalValue;
            const newState = notes.filter(note=>note.id != id)
            setNotes([...newState, ...currNote])
        }else{
            setNotes(notes=>{
                return [...notes, {id : Date.now(), body : inputValue}]
            })
            setInputValue('')
        }
        setModalValue('')
        setModalVisible(false)

    }

    const handleNoteEdit = (id)=>{
        const currNote = notes.filter(note=>note.id == id)
        setInputValue(currNote[0].body)
    }
  return (
    <div className='note'>

        <NoteListComponent 
            notes = {notes} 
            handleNoteEdit={handleNoteEdit} 
            setModalVisible = {setModalVisible}
            setId={setId}
        />
        <AddForm inputValue={inputValue} setInputValue={setInputValue} setPost={setPost}/>

        <MyModal setModalVisible={setModalVisible} modalVisible={modalVisible} >
            <AddForm id={id} inputValue = {modalValue} setInputValue={setModalValue} setPost={setPost}/>
        </MyModal>

    </div>
  )
}

export default NoteList
