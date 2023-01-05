import '../styles/form-style.css'
import { createPost } from '../services/posts.js'

const objeto = {
    nombre: "pepe",
    apellido: "matrinez"
}

const entries = Object.entries(objeto)
const keys = Object.keys(objeto)
const values = Object.values(objeto)

console.log({
    entries,
keys,
values
})

const Form = () => {
    return(
        <div className='principal-container'>
            <h1>Crea un nuevo post</h1>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>
                    <input className='border' name="title" type='text' placeholder='Título' />
                </label>
                
                <label>
                    <textarea className='border' name="body" placeholder='Contenido'/>
                </label>
                
                <label>
                    <input className='border' name="userId" type='number' placeholder='User Id'/>
                </label>

                <button className='little-button' type='submit'>Crear</button>
            </form>
        </div>
    )
}

const submitHandler = (e) => {
    e.preventDefault()
    const datos = new FormData(e.target)
    const arrayDeDatos = [...datos]
    const objetoDeDatos = Object.fromEntries(arrayDeDatos)
    createPost(objetoDeDatos)
    console.log('handler', objetoDeDatos)
}

export default Form;