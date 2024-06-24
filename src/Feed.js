import React from 'react';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import "./Feed.css";
import InputOption from "./InputOption.js";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__inputContainer' >
        <div className='feed__input'>
            <EditNoteRoundedIcon />
            <form>
              <input type="text" />
              <button type="submit">Send</button>
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
    </div>
  )
}

export default Feed
