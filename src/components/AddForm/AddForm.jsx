import React from 'react'
import MyButton from '../../UI/MyButton/MyButton'

const AddForm = ({inputValue, setInputValue,setPost, id}) => {
  return (
    <form className='note-form' action="">
        <textarea  value={inputValue} onChange={(e)=>setInputValue(e.target.value)} name="" id=""></textarea>
        <MyButton onClick = {(e)=>setPost(e, id)} >enter</MyButton>
    </form>
  )
}

export default AddForm
