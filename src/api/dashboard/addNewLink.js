const addNewLink = async(token, data)=>{
    const res = await fetch("https://localhost:7078/api/shorten-link/create", {
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