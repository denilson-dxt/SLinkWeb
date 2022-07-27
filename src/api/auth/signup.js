const signup = async(data)=>{
    const res = await fetch("https://localhost:7078/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(data)
    })

    return await res.json() || await res.text()
}


export default signup;