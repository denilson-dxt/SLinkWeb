import { useState } from "react"
import { useNavigate } from "react-router-dom"
import signup from "../../api/auth/signup"
import SignupForm from "../../components/SignupForm/SignupForm"

const Signup = () => {
    const navigate = useNavigate()
    const [signupErrors, setSignupErrors] = useState([])
    const handleSignup = async (data) => {
        setSignupErrors([])
        console.log(data)
        let res = await signup(data)
        console.log(res)
        if (res.status == "ERROR") {
            setSignupErrors(res.errors)
        } else {

            navigate("/auth/login")
        }
    }
    return (
        <div className="bg-slate-500 flex flex-col flex-wrap justify-center items-center h-screen">
            <h2 className="mb-5">Signup</h2>
            <ul className="">
                {signupErrors.map(error => {
                    return <li className="w-80 bg-red-500 rounded mb-4 p-2">{error.description}</li>
                })}
            </ul>
            <SignupForm handleSignup={handleSignup} />
        </div>
    )
}


export default Signup