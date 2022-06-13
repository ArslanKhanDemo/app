import React from 'react'
import loadingGif from '../assets/1amw.gif' 


function Loading() {
  return <img src={loadingGif} alt="Loading..." style={{width:"100px",margin:"auto", display:"block"}} />
}

export default Loading