import React from 'react'
import "../Css/Original.css"
import { Link } from 'react-router-dom'
import pic from "../imgs/img1.jpg"
function Original({data}) {
  return (
    <>
    <div className='Original_container'>
        <h4>Originals</h4>
        <div className='Original_content'>
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

export {Original}
