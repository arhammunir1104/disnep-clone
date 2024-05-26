import React from 'react'
import "../Css/Viewers.css"
import v_img1 from "../imgs/viewers-disney.png"
import v_img2 from "../imgs/viewers-marvel.png"
import v_img3 from "../imgs/viewers-national.png"
import v_img4 from "../imgs/viewers-pixar.png"
import v_img5 from "../imgs/viewers-starwars.png"
import v_vid1 from "../vids/disney.mp4"
import v_vid2 from "../vids/marvel.mp4"
import v_vid3 from "../vids/national.mp4"
import v_vid4 from "../vids/pixar.mp4"
import v_vid5 from "../vids/starwars.mp4"
function Viewers() {
  return (
    <div className='viewers_container'>
        <div className='wrap_viewers'>
            <img src={v_img1} alt="Viwers Image" />
            <video src={v_vid1} autoPlay={true} loop={true} playsInline={true} typeof='video/mp4' />
        </div>
        <div className='wrap_viewers'>
            <img src={v_img2} alt="Viwers Image" />
            <video src={v_vid2} autoPlay={true} loop={true} playsInline={true} typeof='video/mp4' />
        </div>
        <div className='wrap_viewers'>
            <img src={v_img3} alt="Viwers Image" />
            <video src={v_vid3} autoPlay={true} loop={true} playsInline={true} typeof='video/mp4' />
        </div>
        <div className='wrap_viewers'>
            <img src={v_img4} alt="Viwers Image" />
            <video src={v_vid4} autoPlay={true} loop={true} playsInline={true} typeof='video/mp4' />
        </div>
        <div className='wrap_viewers'>
            <img src={v_img5} alt="Viwers Image" />
            <video src={v_vid5} autoPlay={true} loop={true} playsInline={true} typeof='video/mp4' />
        </div>
    </div>
  )
}

export  {Viewers}
