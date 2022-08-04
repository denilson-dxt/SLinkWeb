const deleteLinkAsync = async(token, code)=>{
    const res = await fetch("https://localhost:7078/api/shorten-link/delete?code=" + code, {
        method: "delete",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        })

    return res.status == 200 ? {status: "OK", data: await res.json()} : {status: "ERROR", data: await res.text()}

}

export default deleteLinkAsync