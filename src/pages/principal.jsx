import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/posts.js'
import '../styles/principal-style.css'

const Principal = () => {
    const [posts, setPosts] = useState([])

    useEffect(
      () => {getPosts().then(response => setPosts(response))},
      []
    )

    return(
        <div className='App'>
          <Link to='/form'>
          <button>Crear nuevo post</button>
          </Link>
          {posts.map((post) => {
            return (
              <div className='post-container' key={post.id}>
                <div className='title-container'>
                  <h2>{post.title}</h2>
                </div>
                <div className='body-container'>
                  <p>{post.body}</p>
                </div>
                <Link className='read-more' to={`/post/${post.id}`}>Saber más...</Link>
              </div>
            )
          }) }  
      </div>
    );
    
}

  export default Principal;