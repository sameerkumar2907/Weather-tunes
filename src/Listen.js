import React from "react"
import { useLocation } from "react-router-dom"
import Iframe from 'react-iframe'
import Data from "./Data"
function Listen(props){
    const location = useLocation()
    const song_url= Data[location.weather]["song"]
    const video_url= "/Videos" + Data[location.weather]["background"]
    return(
        <div className="video">
            <video className='videoTag' autoPlay loop muted>
                <source src={video_url} type='video/mp4' />
            </video> 
            {console.log(video_url)}
            <Iframe url={song_url}
                width="350px"
                height="350px"  
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
        </div>
    )
}

export default Listen