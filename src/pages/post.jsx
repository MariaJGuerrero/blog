import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/post-style.css'

const Post = ()=> {
    const { id } = useParams();
    const [post, setPost] = useState()
    const [user, setUser] = useState()


    useEffect(
        () => {
            getPost(id).then(postResponse => {
                setPost(postResponse)
                getUser(postResponse?.userId).then(response => setUser(response))
            })
        },
        []
    )
    
    return (
        <>
            <div className='principal-container'>
                <section className='section-container'>
                    <h3 style={{color: '#7868E6'}}> Post con el id {id}</h3>
                    <h4>{post?.title}</h4>
                    <p>{post?.body}</p>
                </section>
                <aside className='aside-container'>
                    <h3 style={{color: '#7868E6'}}> Datos del autor/a</h3>
                    <p>{user?.name}</p>
                    <p>{user?.username}</p>
                    <p>{user?.email}</p>
                    <p>{user?.website}</p>
                </aside>
            </div>
            <Link to='/'>
                <button className='little-button'>Inicio</button>
            </Link>
        </>  
    )
}



const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const body = await response.json()
    return body
  }

  const getUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const body = await response.json()
    return body
  }



export default Post;