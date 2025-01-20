import React, { forwardRef } from 'react'
import video from '../../../assets/video/videoex.mp4'
import './Video.css'
type prop ={
      value:string
}
function VideoNotUseImperativeHandle(props:prop, ref:React.Ref<HTMLVideoElement>) {
  return (
    <div className='video_container'>   
      <h1>{props.value}</h1>
    <div><video ref={ref}  className='video_edit' src={video} width={280}></video></div>
  </div>
  )
}

export default forwardRef(VideoNotUseImperativeHandle)