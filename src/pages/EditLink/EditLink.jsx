import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import getLinkByCode from "../../api/dashboard/getLinkByCode"


const EditLink = (props)=>{
    const [link, setLink] = useState("")
    const [key, setKey] = useState("")
    const [isProtected, setIsProtected] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const params = useParams()
    useEffect(()=>{
        const getLink = async()=>{
            let res = await getLinkByCode(localStorage.getItem("userToken"), params.code)
            console.log(res.data)
            if(res.status == "ERROR")
                return false;
            
            setLink(res.data.originalLink)
            setKey(res.data.key)
            setIsProtected(res.data.isProtected)
            setIsLoading(false)
        }
        getLink()
    },[])

    const handleSubmit = async () => {
        const data = {
            OriginalLink: link, Key: key, Isprotected: isProtected
        }

        const res = await addNewLink(localStorage.getItem("userToken"), data)
        console.log(res);
        if(res.status == "ERROR"){
            alert("Error, try again, make sure the field Target links has a valid link")
        }else{
            navigate("/dashboard/links")
        }
    }
    if(isLoading) return <h1>Loading</h1>
    return (
        <div className="w-full">
            <h1 className="text-center mt-2 text-2xl text-cyan-100">Edit link </h1>
            <div className="w-full h-full flex justify-center items-center">
                <form className="w-96 p-1 h-3/4  ">
                    <div className="flex flex-col mb-8">
                        <label className="text-left" htmlFor="link">Target link</label>
                        <input className="h-10 mt-2 rounded p-2" required type="text" name="link" value={link} onChange={(event) => setLink(event.target.value)} id="link" placeholder="Eg: http://www.slink.com" />
                    </div>
                    <div className="flex flex-col mb-8">
                        <label className="text-left" htmlFor="key">Key</label>
                        <input className="h-10 mt-2 rounded p-2" type="text" name="key" id="key" value={key} onChange={(event) => setKey(event.target.value)} placeholder="Optional" />
                    </div>
                    <div class="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked={isProtected} onChange={(event) => setIsProtected(!isProtected)} />
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                            Protect link
                        </label>
                    </div>
                    <div class="flex items-center">
                        <button onClick={handleSubmit} type="button" className="rounded bg-slate-800 mt-8 w-full h-10">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditLink