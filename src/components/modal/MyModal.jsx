import React from 'react'
import './myModal.css'

const MyModal = ({children, modalVisible, setModalVisible}) => {



  return (
    <div className= {modalVisible ? 'myModal myModal-active ' : 'myModal'} onClick={()=>setModalVisible(false)}>
      <div className='myModalContent' onClick={(e)=>e.stopPropagation()}>
            {children}
      </div>
    </div>
  )
}

export default MyModal;
