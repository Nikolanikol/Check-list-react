import React from 'react'
import PostItem from '../PostItem/PostItem'
import './PostList.css'
const PostList = ({posts, handleChecked, handleDelete, handleRedaction}) => {

  return (
    <div className='posts-list'>
        {
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
        }
    </div>
  )
}

export default PostList
