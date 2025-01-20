import { useRef } from 'react'
import './UseImperativeHandle.css'
import Video from './VideoUseImperativeHandle'
import VideoNotUseImperativeHandle from './VideoNotUseImperativeHandle';
function UseImperativeHandle() {
      const videoRef1 = useRef<HTMLVideoElement | null>(null);
      const videoRef2 = useRef<HTMLVideoElement | null>(null);

      const handlePlay = ()=>{
            if(videoRef1.current){
                  videoRef1.current.play();
                  console.log(videoRef1.current)
            }
      }
      const handlePause = ()=>{
            if(videoRef1.current){
            videoRef1.current.pause();
            }
      }

      const handlePlay2 = ()=>{
            if(videoRef2.current){
                  videoRef2.current.play();
                  console.log(videoRef2.current)
            }
      }
      const handlePause2 = ()=>{
            if(videoRef2.current){
                  videoRef2.current.pause();
            }
      }
  return (
    <div className='useImperativeHandle_container'>
      <div className="titleUseImperativeHandle">
            <h1>What is <span>useImperativeHandle</span>?</h1>
            <p><span>useImperativeHandle</span> is a React Hook that lets you customize the handle exposed as a <strong>ref</strong>.</p>
      </div>
      <h1>useImperativeHandle demo</h1>
      <div className="video_container_useImper">
            <div className="mini_container_video">
      <Video value='Component using useImperativeHandle' ref={videoRef1}/>
      <div className="control_btn_useImper">
      <button className="play_btn_" onClick={handlePlay}>Play</button>
      <button className="pause_btn_" onClick={handlePause}>Pause</button>
      </div>
      </div>
      <div className='mini_container_video'>
      <VideoNotUseImperativeHandle value='Component not using useImperativeHandle' ref={videoRef2}/>
      <div className='control_btn_useImper'>
      <button className="play_btn_" onClick={handlePlay2}>Play</button>
      <button className="pause_btn_" onClick={handlePause2}>Pause</button>
      </div>
      </div>
      
      </div>
     
      <div className="explaination_twoVideoComponent">
            <p>  Component using <span>useImperativeHandle</span> is safe because it provie a ref with an object that limit action that can be access and change the video. <br />
            Component not using <span>useImperativeHandle</span>  it return a element video that we can easily to change properties of this video element.</p>
      </div>

    </div>
  )
}

export default UseImperativeHandle