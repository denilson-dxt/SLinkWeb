const checkLogin = async(token)=>{
    const res = await fetch("https://localhost:7078/api/auth/check-login", {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        })

    return res.status == 200 ? await res.json() : await res.text()
}


export default checkLogin;