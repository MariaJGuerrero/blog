export const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const body = await response.json()
    return body
}

export const createPost = async (objeto) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(objeto)
    })
    const body = await response.json()
    return body
}

