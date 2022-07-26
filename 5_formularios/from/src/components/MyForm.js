import './MyForm.css'
import {useState} from 'react'
const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState()
    const [role, setRole] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('enviando form')
        console.log(name, email, bio, role)
        setName("")
        setEmail("")
        setBio("")
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>

            </div>
            <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Bio</span>
                <textarea name='bio' placeholder='descrição do user' onChange={(e) =>  setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Funcao</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">usuario</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm