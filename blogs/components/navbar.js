import {FaSignOutAlt} from 'react-icons/fa';
import Link from 'next/link'
//import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/pages/firebase';
import { useState } from 'react';
function Navbar({isAuth}) {
  

const router=useRouter()
const signUserOut=()=>{
signOut(auth).then(()=>{
    localStorage.clear()
   
//setIsAuth(false)
//window.location.pathname='/Login'
router.push('/Login')
})
}



 return (
    <>
   <nav className='navbar navbar-expand-md  navbar-dark bg-black'  style={{position:"fixed",width:"100%"}}>
 
  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar" >
    <ul className="navbar-nav" style={{marginLeft:"auto",marginRight:"auto"}}>
      <li className="nav-item">
        <Link className="nav-link"  href='/' style={{fontSize:"20px",fontFamily:"times new roman",fontWeight:"900"}} isAuth={isAuth}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href='/CreatePost' style={{fontSize:"20px",fontFamily:"times new roman",fontWeight:"900"}} isAuth={isAuth}>Create Post</Link>
      </li>
</ul>
  </div> 
  <div>
  <button className='btn ' style={{color:"white",fontSize:"30px"}} onClick={signUserOut}><FaSignOutAlt/></button> 
  </div>
 
</nav>

  

    </>
  )
}

export default Navbar