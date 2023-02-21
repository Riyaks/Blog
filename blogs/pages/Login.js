import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {auth,provider} from './firebase'
import { signInWithPopup } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa'
function Login() {
  const [isAuth,setIsAuth]=useState(false)
    const router = useRouter()
    const signinwithgoogle=()=>{
      signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem('isAuth',true);
        setIsAuth(true)
        router.push('/CreatePost')
      })
    
    }



  return (
    <>
    <div style={{backgroundColor:"white",height:"100%"}}>
    <h1 style={{marginBottom:"100px"}}>login</h1>
    <div style={{width:"500px",marginLeft:"auto",marginRight:"auto"}}>
      <img src="https://static.vecteezy.com/system/resources/previews/005/276/776/original/logo-icon-person-on-white-background-free-vector.jpg" style={{width:"200px",height:"200px",marginLeft:"60px"}}></img>
        <h3 style={{fontFamily:"vardana"}}>Sign in with google to continue</h3>
        <button className='logingoogle'  onClick={signinwithgoogle} style={{width:"300px",padding:"8px",marginLeft:"20px",marginTop:"10px",borderRadius:"6px",color:"blue"}}><span style={{fontSize:"25px"}}><FaGoogle/>  signin with google</span></button>
    </div>
    </div>
    </>
  )
}

export default Login