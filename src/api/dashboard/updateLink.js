import env from "../../env"

const updateLink = async(token, data)=>{
    let api_url = env.apiUrl;

    const res = await fetch(`${api_url}/api/shorten-link/update`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            
        },
        body: JSON.stringify(data)
        })

    return res.status == 200 ? {status: "OK", data: await res.json()} : {status: "ERROR", data: await res.text()}
}


export default updateLink