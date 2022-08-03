const getLinkByCode = async(token, code)=>{
    const res = await fetch("https://localhost:7078/api/shorten-link/get?code=" + code, {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        })

    return res.status == 200 ? {status: "OK", data: await res.json()} : {status: "ERROR", data: await res.text()}

}

export default getLinkByCode