import React from 'react'
import "../Css/Trending.css"
import { Link } from 'react-router-dom'
import pic from "../imgs/img1.jpg"
function Trending({data}) {
  return (
    <>
    <div className='Trending_container'>
        <h4>Trending</h4>
        <div className='Trending_content'>
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

export {Trending}
