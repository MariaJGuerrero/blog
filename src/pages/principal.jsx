import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/posts.js'

const Principal = () => {
    const [posts, setPosts] = useState([])

    useEffect(
      () => {getPosts().then(response => setPosts(response))},
      []
    )

    return(
        <div className="App">
          <Link to='/form'>
          <button>Crear nuevo post</button>
          </Link>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`}>Leer más...</Link>
            </div>
          )
        }) }  
      </div>
    );
    
}

  export default Principal;