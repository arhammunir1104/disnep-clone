import React, { useEffect, useState } from 'react'
import "../Css/Details.css"
import pic from "../imgs/img1.jpg";
import pic2 from "../imgs/login-background.jpg"
import playerIcon from "../imgs/play-icon-black.png"
import trailerIcon from "../imgs/play-icon-white.png"
import groupIcon from "../imgs/group-icon.png"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { Loader } from './Loader';
import ReactPlayer from 'react-player'


function Details() {

  let params = useParams()
  let detail_id = params.id;
  let [fetchedData, setFetchedData] = useState();
  let [isLoading, setIsloading]= useState(false)
  let [vidStyle, setVidStyle] = useState({"display" : "none"})
  let navigate = useNavigate()
  useEffect(()=>{
    setIsloading(false)
    const verify = Cookies.get('v'); 
    if(!verify){
      navigate("/")
    }
    else{
      let fetchData = async function(){
        try{
          let data= await fetch("/disneyPlusData.json");
          let res = await data.json();
          // console.log(res)
          let r = res.filter((d)=>{return(d.id == detail_id)})
          // console.log(r);
          setFetchedData(r[0])
          setIsloading(true)
        }
        catch(e){
          console.log("Detail Component error", e)
        }
      };
      fetchData()
    }
  }, [])
  let videoStyle ={
    border: "2px solid blue",
    width: "900px"
  }
  function closeVideo(){
    setVidStyle({
      "display" : "none"
    })
  }
  function openVid(){
    setVidStyle({
      "display" : "block"
  })

  }

  return (
    <>
    {(!isLoading)
    ?
    <Loader />
    :
      
    <div className='detailsContainer'>
    <div className="DetailBackground">
      <img src={fetchedData.backgroundImg} alt="Background" />
    </div>

    <div className="DetailImageTitle">
      <img src={fetchedData.titleImg} alt="Title Image" />
    </div>

    <div className="controlMeta">
      <div className="controls">
        <button className="player" onClick={openVid}>
          <img src={playerIcon} alt="Play" />
          <span>Play</span>
        </button>
        
      <button className="trailer" onClick={openVid}>
        <img src={trailerIcon} alt="Trailer" />
        <span>Trailer</span>
      </button>
      <button className="addList">
        <span />
        <span />
      </button>

      <div className="groupMatch">
        <div>
          <img src={groupIcon} alt="Group" />
        </div>
      </div>
      </div>

      <div className="VideoPlayer" style={vidStyle}>
        <div className="cancel">
          <button onClick={closeVideo}>X</button>
        </div>
        <div className="playerContainer">
        <ReactPlayer width="4" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' className="video" controls={true}/>

        </div>
      </div>
      <div className="subtitle">
        {fetchedData.subTitle}
      </div>
      <div className="detailDescription">
        {fetchedData.description}
      </div>
    </div>
  </div>
    }
    </>
  )
}

export {Details}
