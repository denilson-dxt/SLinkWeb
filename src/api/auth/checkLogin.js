import env from "../../env";

const checkLogin = async(token)=>{
    let api_url = env.apiUrl;

    const res = await fetch(`${api_url}/api/auth/check-login`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        })

    return res.status == 200 ? await res.json() : await res.text()
}


export default checkLogin;