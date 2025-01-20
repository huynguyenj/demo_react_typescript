import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import './Video.css'
import video from '../../../assets/video/videoex.mp4'
type ImperativeVideoHandle = {
      play: () => void;
      pause: () => void;
}
type prop ={
      value:string
}
function Video(props: prop, ref:React.Ref<ImperativeVideoHandle>) {
      const videoRef = useRef<HTMLVideoElement | null>(null);
     
      useImperativeHandle(ref, ()=>({
            play(){
                  videoRef.current?.play();
            },
            pause(){
                  videoRef.current?.pause();
            }
      }))
  return (
    <div className='video_container'>
      <h1>{props.value}</h1>  
      <div><video ref={videoRef}  className='video_edit' src={video}></video></div>
    
    </div>

  )
}

export default forwardRef(Video)