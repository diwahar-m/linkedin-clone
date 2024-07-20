import React, { useEffect, useState } from 'react';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import "./Feed.css";
import InputOption from "./InputOption.js";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import Post from "./Post";
import { db } from './firebase';
import {serverTimestamp, collection, onSnapshot, addDoc, query,orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice.js';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser)

  useEffect(()=>{
    // gives real time collection of database.
    const postsCollection  = collection(db, "posts");
    const postsQuery = query(postsCollection, orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(postsQuery, snapshot => (
      setPosts(snapshot.docs.map(doc => 
        ({
          id: doc.id,
          data: doc.data(),
        })
      ))
    ))
    return () => unsubscribe();
  },[])

  const sendPost = async (e) =>{
    e.preventDefault();
    try {
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, {
        name: user?.displayName,
        description: user?.email,
        message: input,
        photoUrl: user?.photoUrl || '',
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer' >
        <div className='feed__input'>
            <EditNoteRoundedIcon />
            <form>
              <input value={input} onChange={e => setInput(e.target.value)} type="text" />
              <button onClick={sendPost}  type="submit">Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption  
            Icon={AddPhotoAlternateIcon} 
              title="Photo"
              color="#70B5F9"/>
          <InputOption  
            Icon={VideoLibraryIcon} 
              title="Video"
              color="#E7A33E"/>
          <InputOption  
            Icon={EventNoteIcon} 
              title="Event"
              color="#C0CBCD"/>
          <InputOption  
            Icon={ArticleIcon} 
              title="Write article"
              color="#7FC15E"/>
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
            {posts.map(({id, data: { name, description, message, photoUrl}})=>
              <Post 
                key={id}
                name= {name}
                description= {description}
                message= {message}
                photoUrl= {photoUrl} 
              />
          )}
      </FlipMove>
      
      {/* <Post 
        name="modi" 
        description="This is a test" 
        message="Wow this worked" 
      /> */}
    </div>
  )
}

export default Feed
