import React from 'react'
import { useState } from 'react'
import "../Css/Home.css"
import { ImgSlider } from './ImgSlider'
import { Viewers } from './Viewers'
import { Recommend } from './Recommend'
import {NewDisney} from "./NewDisney"
import { Original } from './Original'
import { Trending } from './Trending'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import { Loader } from './Loader'

// import {useDispatch, useSelector} from "react-redux";
import db from "../firebaseApp"
import { useNavigate } from 'react-router-dom'
// import {setMovies} from "../features/movieSlice"
// import {selectUserName} from "../features/userSlice"
// import { original } from '@reduxjs/toolkit'
function Home() {
  const [isLoading2, setIsloading2] = useState(false)
  const [allData, setAllData] = useState()
  const [recom, setRecom] = useState()
  const [newDis, setNewDis] = useState()
  const [orig, setOrig] = useState()
  const [trend, setTrend] = useState()
  let navigate = useNavigate()

  // let recommends2 = useRef([])
  // console.log("Recommends 2" , typeof(recommends2))
  // let dispatch = useDispatch()
  // let userName = useSelector(selectUserName)
  // let [recommends2, setRecommends2]= useState=([])
  // let [newDisneys2, setnewDisneys2]= useState=([])
  // let [originals2, setoriginals2]= useState=([])
  // let [trendings2, settrendings2]= useState=([])
  // let recommends = []
  // let newDisneys = []
  // let originals =[]
  // let trendings = []

  // useEffect(()=>{
  //   setIsloading2(false)
  //   db.collection("movies").onSnapshot((snapshot)=>{
  //     snapshot.docs.map((doc)=>{
  //       switch(doc.data().type){
  //         case "recommend":
  //           // setRecommends([...recommends ,{id: doc.id, ...doc.data()}])
  //           recommends= [...recommends ,{id: doc.id, ...doc.data()}]
  //           // recommends2.current= [...recommends2 ,{id: doc.id, ...doc.data()}]
            
  //           // recommends.push(recommends)
  //           // recommends.push({id: doc.id, ...doc.data()})
  //           console.log(recommends)
  //           console.log("recommends")
  //           break;
  //         case "new":
  //           newDisneys = [ ...newDisneys ,{id: doc.id, ...doc.data()}];
  //           // setnewDisneys([ ...newDisneys ,{id: doc.id, ...doc.data()}])
  //           console.log("Disney")
  //           break;
  //         case "original":
  //           originals = [...originals ,{id: doc.id, ...doc.data()}];
  //           // setoriginals([...originals ,{id: doc.id, ...doc.data()}])
  //           console.log("Original")
  //           break;
  //         case "trending":
  //           trendings = [...trendings ,{id: doc.id, ...doc.data()}];
  //           // settrendings([...trendings ,{id: doc.id, ...doc.data()}])
  //           console.log("trending")
  //           break;
  //       }
  //     })
  //     console.log("Reached to true")
  //     console.log(recommends)
  //     // setRecommends2(recommends)
  //     // setnewDisneys2(newDisneys)
  //     // setoriginals2(originals)
  //     // settrendings2(trendings)
  //     setIsloading2(true)
  //   })
  // }, [])
  // dispatch(setMovies({
  //   Recommend :recommends,
  //   newDisney: newDisneys,
  //   original: originals,
  //   Trending: trendings
  // }), [userName])

  useEffect(()=>{
    setIsloading2(false)
    const verify = Cookies.get('v'); 
    const photo = Cookies.get('p'); 
    // console.log(verify)
    // console.log(photo)

    if(!verify){
      navigate("/");
    }
    else{
      let fetchData = async ()=>{
        try{
          let data = await fetch("./disneyPlusData.json")
          // console.log(data)
          let res = await data.json()
          // console.log(res)
          setAllData(res)
          distributeFunc(res)
        }
        catch(e){
          console.log("Error in data fetching", e)
        }
      };
      fetchData();
      let distributeFunc= (data2)=>{
        // console.log("Data 2",data2)
        let r = data2.filter((d)=>{return(d.type === "recommend")})
        let n = data2.filter((d)=>{return(d.type === "new")})
        let o = data2.filter((d)=>{return(d.type === "original")})
        let t = data2.filter((d)=>{return(d.type === "trending")})
        setRecom(r)
        setNewDis(n)
        setOrig(o)
        setTrend(t)
        setIsloading2(true)
      }  
    }
  }, [])
  return (
  <>
    {/* {console.log( "data" ,recom)} */}
    <div className="main" >
     {(!isLoading2) 
     ?
     <>
      <Loader />
       {/* <p>Loading...</p> */}
     </>
     :
     <>

       <ImgSlider />
       <Viewers />
       <Recommend data={recom} />
       <NewDisney data={newDis} />
       <Original data={orig} />
       <Trending data={trend} /> 
     </>
     }
    </div>
    </>
  )
}

export {Home}
