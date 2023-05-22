import env from "../../env"

const getLinkByCode = async(token, code, key="")=>{
    let api_url = env.apiUrl;
    const res = await fetch(`${api_url}api/links/get-link?code=${code}&key=${key}`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        })
    return res.status == 200 ? {status: "OK", data: await res.json()} : {status: "ERROR", data: await res.text()}

}

export default getLinkByCode