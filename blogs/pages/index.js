import { deleteDoc, doc, getDocs } from 'firebase/firestore';
import styles from './Create.module.css'
import React, { useEffect, useState } from 'react'
import { collection } from 'firebase/firestore';
import { db } from './firebase';
import { FaTrash } from 'react-icons/fa';
import { auth } from './firebase';
function Home() {
const [postLists,setPostLists]=useState([]);
const postsCollectionRef=collection(db,"posts")
useEffect(()=>{
  const getPosts = async ()=>{
    const data=await getDocs(postsCollectionRef);
    setPostLists(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };
  getPosts();
});


const deletePost=async (id) =>{
   const postDoc=doc(db, "posts",id)
  if(localStorage.getItem("isAuth"))
await deleteDoc(postDoc)

}


  return (
    <>
    <div style={{backgroundImage:"url(https://thecutestblogontheblock.com/wp-content/uploads/2011/11/hilltop-hideaway-free-stretch-blog-background-wood.jpg)",backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundPosition:"center"}}>
<p style={{marginBottom:"70px"}}>.</p>

{postLists.map((post)=>{
  return(
    <div style={{width:"700px",boxShadow:"6px 12px 15px black",marginLeft:"auto",marginRight:"auto",marginBottom:"50px",height:"300px",overflow:"auto"}}>
    <h2 style={{textAlign:"center",fontFamily:"times new roman",textTransform:"uppercase"}}>{post.title}
    {localStorage.getItem("isAuth") && post.author.id=== auth.currentUser.uid && <span style={{fontSize:"16px",float:"right"}}><button style={{border:"none"}} onClick={()=>{deletePost(post.id)}}><FaTrash/></button></span>}</h2>
<h5 style={{marginTop:"30px",fontFamily:"robosto",marginLeft:"6px",margin:"20px",textAlign:"justify"}}>{post.post}</h5>
    <p >@{post.author.name}</p>

  </div>
)
})}
</div>
    </>
  ) 
}

export default Home