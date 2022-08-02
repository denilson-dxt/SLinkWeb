import { PencilAltIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import getUserLinks from "../../api/dashboard/getUserLinks"
import LinksTable from "../../components/LinksTable/LinksTable"

const UserLinks = () => {
    const [links, setLinks] = useState([])
    useEffect(() => {
        const getLinks = async () => {
            const linksData = await getUserLinks(localStorage.getItem("userToken"))
            console.log(linksData);
            setLinks(linksData)
        }

        getLinks()
    }, [])
    return (
        <div className="w-full">
            <h1 className="text-center mt-2 text-2xl text-cyan-900">Links you shorted</h1>
            <LinksTable links={links}/>
        </div>
    )
}

export default UserLinks