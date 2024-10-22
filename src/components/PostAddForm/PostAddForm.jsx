import React, { useState } from 'react'
import './PostAddForm.css'
import MyButton from '../../UI/MyButton/MyButton'
const PostAddForm = ({handleAddPost,}) => {
    const [inputValue, setInputValue] = useState('')
    const addPost = ()=>{
        if(inputValue.length > 0){
            const newPost = {
                id :  Date.now(),
                body : inputValue,
                checked : false
            }
            handleAddPost(newPost)
            setInputValue('')
        }
    }
  return (
    <form action="" className='post-add-form'>
        <input placeholder='set your deal' type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <MyButton onClick = {addPost} type = 'button'> Add task</MyButton>
    </form>
  )
}

export default PostAddForm
