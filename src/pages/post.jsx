import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
    console.log(post)
    console.log('USEEER', user)
    return (
        <div className='principal-container'>
            <section className='section-container'>
                <h1 style={{color: 'red'}}> Post con el id {id}</h1>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>
            </section>
            <aside className='aside-container'>
                <p>{user?.name}</p>
                <p>{user?.username}</p>
                <p>{user?.email}</p>
                <p>{user?.website}</p>
            </aside>
        </div>
        
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