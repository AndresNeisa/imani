import './App.css';
import React, { useEffect, useState } from 'react';
import youtube from './apis/youtube'
import Hero from './Hero';
import VideoList from './VideoList';
import Sponsors from './Sponsors';

function App (){
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {
    const fetchVideos = async () => {
      const { data }  = await youtube.get();
      console.log(data);
      setVideos(data.items);
    }

    fetchVideos();
    
  },[])
  
  return (
    <React.Fragment>
      <Hero>{console.log(videos)}</Hero>
      <Sponsors/>
      <section className='videos'>
        <VideoList videos={videos}></VideoList>
      </section>
    </React.Fragment>
  );
}

export default App;
