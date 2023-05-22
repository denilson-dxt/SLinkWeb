import env from "../../env";

const signup = async(data)=>{
    let api_url = env.apiUrl;
    const res = await fetch(`${api_url}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(data)
    })

    return await res.json() || await res.text()
}


export default signup;