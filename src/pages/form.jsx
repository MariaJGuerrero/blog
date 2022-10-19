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
        <div>
            <h1>Crea un nuevo post</h1>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>
                    <p>Título</p>
                    <input name="title" type='text' placeholder='Título' />
                </label>
                
                <label>
                    <p>Contenido</p>
                    <textarea name="body" />
                </label>
                
                <label>
                    <p>User Id</p>
                    <input name="userId" type='number'/>
                </label>

                <button type='submit'>Crear</button>
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