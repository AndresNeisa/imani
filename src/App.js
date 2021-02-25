import './App.css';
import React, { useEffect, useState } from 'react';
import youtube from './apis/youtube'
import Hero from './Hero';

function App (){
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {
    const fetchVideos = async () => {
      const { data }  = await youtube.get();
      console.log(data.items);
      setVideos(data.items);
    }

    fetchVideos();
    
  },[])
  
  return (
    <Hero>{console.log(videos)}</Hero>
  );
}

export default App;
