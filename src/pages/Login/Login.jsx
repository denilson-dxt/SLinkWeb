import { useState } from "react"
import login from "../../api/auth/login";
import LoginForm from "../../components/LoginForm/Index"

const Login = ()=>{
    const [loginErrors, setLoginErrors] = useState([])
    const handleLogin = async(data)=>{
        setLoginErrors([])
        let res = await login(data)
        if(res.status == "ERROR"){
            setLoginErrors([res.error])
        }
        console.log(res);
    } 

    return (
        <div className="bg-slate-500 flex flex-col justify-center items-center h-screen">
            <h2 className="mb-5">Login</h2>
            <div className="">
                {loginErrors.map(error => {
                    return <span>{error}</span>
                })}
            </div>
            <LoginForm handleLogin={handleLogin}/>
        </div>
    )
}

export default Login