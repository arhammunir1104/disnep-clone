import React,{useState} from 'react'
import "../Css/Login.css"
import "../Css/Header.css"
import Logo from "../imgs/logo.png"
import homeIcon from "../imgs/home-icon.png"
import searchIcon from "../imgs/search-icon.png"
import watchListIcon from "../imgs/watchlist-icon.png"
import originalsIcon from "../imgs/original-icon.png"
import moviesIcon from "../imgs/movie-icon.png"
import seriesIcon from "../imgs/search-icon.png"
import {auth, provider} from "../firebaseApp.js"
import {useDispatch, useSelector} from "react-redux";
import { useHref, useNavigate } from 'react-router-dom';
import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState} from "../features/userSlice.js"
import Cookies from 'js-cookie';
import ctaLogoOne from "../imgs/cta-logo-one.png"
import ctaLogoTwo from "../imgs/cta-logo-two.png"
function Login() {
  
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let username = useSelector(selectUserName)
  let userEmail = useSelector(selectUserEmail)
  let userphoto = useSelector(selectUserPhoto)
  let [verify, setVerify] = useState(false);
  let [photo, setPhoto] = useState("");
  let [pic, setPic] = useState("");
  let h = useHref()
  
  let setUser=(user)=>{
    dispatch(
        setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo : user.photoURL
        })
    )

}
  let handleAuth = ()=>{
    if(!verify){
    auth.signInWithPopup(provider).then((result)=>{
        setUser(result.user.multiFactor.user);
        console.log(result);
        console.log(result.user.multiFactor.user);
        Cookies.set('v', result.user.multiFactor.user.emailVerified , { expires: 7 });
        Cookies.set('p', result.user.multiFactor.user.photoURL , { expires: 7 }); 
        setVerify(result.user.multiFactor.user.emailVerified)
        setPhoto(result.user.multiFactor.user.photoURL)
        }).catch((e)=>{alert(e.message)})
    console.log(username)
    }
    else if(verify) {
        auth.signOut().then(()=>{
            dispatch(setSignOutState())
            Cookies.remove('v'); 
            Cookies.remove('p'); 
            navigate("/")
            setVerify(false)
        }).catch((e)=>{console.log("Sign out Error" + e.message)})

    }
}

  return (
    <>
    <div className='container'>
        <div className='content'>
            <div className='CTA'>
                <img src={ctaLogoOne} alt="logoone" className='CTALogoOne' />
                <button className="signup" onClick={handleAuth}>GET ALL THERE</button>
                <p className='description'>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            
            <img src={ctaLogoTwo} alt="logotwo" className='CTALogoTwo' />
            </div>
            <div className='backgroundImage'></div>
        </div>
    </div>
    </>
  )
}

export {Login}
