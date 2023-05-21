const getLinkByCode = async(token, code, key="")=>{
    const res = await fetch(`https://localhost:7078/api/links/get-link?code=${code}&key=${key}`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        })

    return res.status == 200 ? {status: "OK", data: await res.json()} : {status: "ERROR", data: await res.text()}

}

export default getLinkByCode