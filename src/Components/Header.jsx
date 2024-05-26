import React, {useState, useEffect} from 'react'
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


function Header() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let username = useSelector(selectUserName)
    let userEmail = useSelector(selectUserEmail)
    let userphoto = useSelector(selectUserPhoto)
    let [verify, setVerify] = useState(false);
    let [photo, setPhoto] = useState("");
    let [pic, setPic] = useState("");
    let h = useHref()

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setVerify(true)
                let p = Cookies.get('p'); 
                setPic(p)
                if(h === "/"){
                    navigate("/home")
                }
                else if(h === "/home"){
                    navigate("/home")
                }
                else{
                    navigate(`${h}`)
                }
                // console.log(h)
            }
            else{
                navigate("/")
            }
        })
    }, [verify])

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
            // console.log(result);
            // console.log(result.user.multiFactor.user);
            Cookies.set('v', result.user.multiFactor.user.emailVerified , { expires: 7 });
            Cookies.set('p', result.user.multiFactor.user.photoURL , { expires: 7 }); 
            setVerify(result.user.multiFactor.user.emailVerified)
            setPhoto(result.user.multiFactor.user.photoURL)
            }).catch((e)=>{alert(e.message)})
        // console.log(username)
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
    <div className='nav'>
        <div className="logo">
            <img src={Logo} alt="Logo" className='img_logo' onClick={(e)=>{navigate("/home")}}  />
        </div>
        {console.log(username)}
        {(!verify) ? <a className='login' onClick={handleAuth}>Login</a> 
        :
        <>
            <div className="navMenu">
            <a href="/home" className='navOption'>
                <img src={homeIcon} alt="HOME" />
            <span>HOME</span>
            </a>
            <a href="/home" className='navOption'>
                <img src={searchIcon} alt="HOME" />
            <span>SEARCH</span>
            </a>
            <a href="/home" className='navOption'>
                <img src={watchListIcon} alt="HOME" />
            <span>WATCHLIST</span>
            </a>
            <a href="/home" className='navOption'>
                <img src={originalsIcon} alt="HOME" />
            <span>ORIGINALS</span>
            </a>
            <a href="/home" className='navOption'>
                <img src={moviesIcon} alt="HOME" />
            <span>MOVIES</span>
            </a>
            <a href="/home" className='navOption'>
                <img src={seriesIcon} alt="HOME" />
            <span>SERIES</span>
            </a>
        </div>  
        <div className="signout">
            {console.log(photo)}
        <img src={pic} className="userImg" alt="Img" />
        <div className='dropdown'>
            <span onClick={handleAuth}>Sign Out</span>
        </div>
        </div>
        </>
         }
        
    </div>
    </>
  )
}

export  {Header}
