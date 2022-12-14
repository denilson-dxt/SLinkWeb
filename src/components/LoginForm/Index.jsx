import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = ()=>{
        const data = {username, password}
        props.handleLogin(data)
    }
    return (
        <form className="flex flex-col justify-center object-cover w-80">
            <div className="flex flex-col mb-8">
                <label className="text-left" htmlFor="username">Username</label>
                <input className="h-10 mt-2 rounded p-2" type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-8">
                <label className="text-left" htmlFor="password">Password</label>
                <input className="h-10 mt-2 rounded p-2" type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="flex mb-4">
                <Link className="w-80 underline text-left " to="/auth/signup">Nao tenho conta</Link>
                <button onClick={handleSubmit} className="rounded bg-teal-800 w-40 h-10" type="button">Entrar</button>
            </div>
        </form>
    )
}

export default LoginForm