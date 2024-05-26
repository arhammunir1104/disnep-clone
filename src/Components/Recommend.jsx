import React, {useState, useEffect} from 'react'
import "../Css/Recommend.css"
import { Link } from 'react-router-dom'
import pic from "../imgs/img1.jpg"
import {useSelector} from "react-redux";
import {selectRecommend} from "../features/movieSlice"

function Recommend({data}) {
    // let movies = useSelector(selectRecommend)
    // console.log("Data in Recommend",data)
    // console.log("REached")

    // useEffect(()=>{
    //     let fetchdata = async ()=>{
    //         let data = await fetch("../disneyPlusData.json")
    //         let res = await data.json()
    //         console.log(res)
    //         console.log("RESponse")
    //     }
    //     fetchdata()
    // }, [])
  return (
    <>
    <div className='recommend_container'>
        <h4>Recommended For You</h4>
        <div className='recommended_content'>
            
            {data.map((data)=>{
                return(
                    <div className='recommended_wrap'>
                        <Link to={`/details/${data.id}`}>
                            <img src={data.cardImg} alt={data.title} srcset="" />
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export {Recommend}
