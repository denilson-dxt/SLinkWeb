import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import login from "../../api/auth/login";
import { UserContext } from "../../components/contexts/userContext";
import LoginForm from "../../components/LoginForm/Index"

const Login = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [loginErrors, setLoginErrors] = useState([])
    const handleLogin = async (data) => {
        setLoginErrors([])
        let res = await login(data)
        if (res.status == "ERROR") {
            setLoginErrors([res.error])
        } else {

            console.log(res.user);
            setUser(res.user)
            localStorage.setItem("userToken", res.token)
            navigate("/dashboard")
        }

    }

    return (
        <div className="bg-slate-500 flex flex-col justify-center items-center h-screen">
            <h2 className="mb-5">Login</h2>
            <ul className="">
                {loginErrors.map(error => {
                    return <li className="w-80 bg-red-500 rounded mb-4 p-2">{error}</li>
                })}
            </ul>
            <LoginForm handleLogin={handleLogin} />
        </div>
    )
}

export default Login