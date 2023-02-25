import React, { useEffect, useState } from 'react';


import Card from './Card';
import NavBar from './NavBar';
function PostView(){
   const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch("https://insta-back-xcxk.onrender.com/posts").then((res)=>res.json()).then((data)=>{
            setPosts(data)
            console.log(data)
        }).catch((err)=>{
            if(err){
                console.log(err)
            }
        })
       
    },[])

    return(
        <>
        <NavBar/>
        <div>{posts.map((post,i)=>{
            return(
                <Card post={post} key = {i}/>
            )
        })}</div>
        </>
    )
}

export default PostView