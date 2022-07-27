import { useState } from "react"
import { Link } from "react-router-dom"

const SignupForm = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = ()=>{
        const data = {username,email, password}
        props.handleSignup(data)
    }
    return (
        <form className="flex flex-col justify-center object-cover w-80">
            <div className="flex flex-col mb-8">
                <label className="text-left" htmlFor="username">Username</label>
                <input className="h-10 mt-2 rounded p-2" type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-8">
                <label className="text-left" htmlFor="email">Email</label>
                <input className="h-10 mt-2 rounded p-2" type={"email"} name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-8">
                <label className="text-left" htmlFor="password">Password</label>
                <input className="h-10 mt-2 rounded p-2" type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="flex mb-4">
                <Link className="w-80 underline text-left " to="/auth/login">Ja tenho uma conta</Link>
                <button onClick={handleSubmit} className="rounded bg-teal-800 w-40 h-10" type="button">Criar conta</button>
            </div>
        </form>
    )
}

export default SignupForm