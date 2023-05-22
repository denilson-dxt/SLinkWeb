import env from "../../env";

const addNewLink = async(token, data)=>{
    let api_url = env.apiUrl;

    const res = await fetch(`${api_url}/api/shorten-link/create`, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
        })

    return res.status == 200 ? {status: "OK", data: await res.json()} : {status: "ERROR", data: await res.text()}
}


export default addNewLink