import React, { useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import './PostItem.css'
const PostItem = ({id, body, checked, handleChecked, count, handleDelete, handleRedaction}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')


    const onRedaction = (id, body)=>{
        handleRedaction(id, body)
        setInputValue('')
        setIsModalVisible(!isModalVisible)
    }

  return (
    <div className={checked? 'post-item post-item-checked' :'post-item'}>
        <p>{count+1}. {body}</p>
        <div className={isModalVisible ? 'redact-panel' : 'redact-panel redact-panel-hide' }>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" className='item-input'/>
            <MyButton onClick = {()=> onRedaction(id, inputValue)} > Enter</MyButton>
        </div>
        <div className='buttons-row'>
            <MyButton onClick={()=>handleChecked(id)}>Check</MyButton>
            <MyButton onClick={()=>setIsModalVisible(!isModalVisible)}>Edit</MyButton>
            <MyButton onClick={()=>handleDelete(id)}>Delete</MyButton>
        </div>
    </div>
  )
}

export default PostItem
