import React from 'react'
import PostItem from '../PostItem/PostItem'
import './PostList.css'
const PostList = ({posts, handleChecked, handleDelete, handleRedaction}) => {

  return (
    <div className='posts-list'>
        {
            posts.length >= 1 ? 
            posts.map((post, i)=>{
                return(
                    <PostItem 
                        key={post.id} 
                        id={post.id} 
                        count = {i} 
                        body={post.body} 
                        checked={post.checked} 
                        handleChecked = {handleChecked}
                        handleDelete = {handleDelete}
                        handleRedaction = {handleRedaction}
                    />
                )
            })
            :
            <h1>You have not task!!!</h1>
        }
    </div>
  )
}

export default PostList
