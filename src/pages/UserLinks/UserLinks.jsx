import { PencilAltIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import deleteLinkAsync from "../../api/dashboard/deleteLink"
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
    const deleteLink = async (targetLink) => {
        let linksTemp = []
        linksTemp = links.filter(link => link.code != targetLink.code)
        console.log(linksTemp);
        console.log(targetLink);

        const res = await deleteLinkAsync(localStorage.getItem("userToken"), targetLink.code)
        console.log(res);
        if (res.status == "ERROR")
            return alert("Error, link not found")
        setLinks([...linksTemp])

    }
    return (
        <div className="w-full">
            <h1 className="text-center mt-2 text-2xl text-cyan-900">Links you shorted</h1>
            <LinksTable links={links} deleteLink={deleteLink} />
        </div>
    )
}

export default UserLinks