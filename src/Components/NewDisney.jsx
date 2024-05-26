import React from 'react'
import "../Css/NewDisney.css"
import { Link } from 'react-router-dom'
import pic from "../imgs/img1.jpg"
function NewDisney({data}) {
  return (
    <>
    <div className='NewDisney_upper_container'>
        <h4>New To Disney</h4>
        <div className='NewDisney_content'>

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

export {NewDisney}
