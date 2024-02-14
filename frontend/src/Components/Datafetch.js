import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Datafetch = () => {
    const [posts, setPosts]=useState([])
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        console.log(res)
        setPosts(res.data)
      })
    }, [])
    
  return (
    <div>
    <ul>
    {
        posts.map(post=>(
            <li key='id'>{post.title}</li>
        ))
    }
    </ul>
    </div>
  )
}

export default Datafetch