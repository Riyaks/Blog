import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import styles from './Create.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { db } from './firebase';
import { auth } from './firebase';

function CreatePost() {
  const [isAuth,setIsAuth]=useState(false)
	useEffect(() =>{
		if(!localStorage.getItem("isAuth")) router.push("/Login");
	  },[isAuth]); 
  
 const router = useRouter()
  const [title,setTitle]=useState("");
  const [post,SetPost]=useState("");
const postsCollectionRef=collection(db,"posts")
const createPost=async ()=>{
await addDoc(postsCollectionRef,{title,post,author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid }})
router.push('/')
}

  return (
    <>
    <div className={styles.back}>
   <p>.</p>
    <div className={styles.two}>
    <h1 className={styles.one}>Create A Post</h1>
    <form>
      <div style={{marginLeft:"40px"}}>
    <label  className={styles.four}>Title:</label><br></br>
  <input type="text" onChange={(event)=>{setTitle(event.target.value)}} placeholder='Title here...'  style={{width:"370px",height:"40px",border:"1px solid white",borderRadius:"10px"}}></input></div><br></br>
  <div style={{marginLeft:"40px"}}>
    <label className={styles.four}>post:</label><br></br>
    <textarea onChange={(event)=>{SetPost(event.target.value)}} placeholder='Your post here...' style={{width:"370px",height:"30px",border:"1px solid white",borderRadius:"10px",padding:"30px",height:"200px"}}></textarea>
   </div>
   <div style={{padding:"40px"}} >
    <button className={styles.csub}  type='button' onClick={createPost} style={{width:"370px",fontFamily:"fantasy",fontSize:"20px",borderRadius:'5px'}}>Submit Post</button>
   </div>
  
    </form>
</div>
  </div>

    
    </>
  )
}

export default CreatePost