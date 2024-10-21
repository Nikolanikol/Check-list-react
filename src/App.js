
import { useState } from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import PostAddForm from './components/PostAddForm/PostAddForm';

function App() {
    const [posts, setPosts] = useState([
        {id : '1', body : 'Wash a car', checked : true},
        {id : '2', body : 'Have a breackfast', checked : false},
        {id : '3', body : 'To watch TV', checked : false},
    ])
    const handleAddPost = (newPost)=>{
        setPosts([...posts, newPost])
    }
    const handleChecked = (id)=>{
        setPosts(posts=>{
             return posts.map(post=>{
                if(post.id == id){
                    return {...post, checked : !post.checked}
                }
                return post
            })
        })
    }
    const handleDelete= (id)=>{
        setPosts(posts=>{
            return posts.filter(post=>post.id != id)
        })
    }
    const handleRedaction = (id, body)=>{
        setPosts(posts=>{
            return posts.map(post=>{
                if(post.id == id){
                    return{...post, body : body}
                }
                return post
            })
        })
    }
    console.log('render')
  return (
    <div className="App">
        <PostAddForm handleAddPost = {handleAddPost} />
        <PostList 
            posts = {posts} 
            handleChecked ={handleChecked}
            handleDelete = {handleDelete}
            handleRedaction = {handleRedaction}
        />
    </div>
  );
}

export default App;
