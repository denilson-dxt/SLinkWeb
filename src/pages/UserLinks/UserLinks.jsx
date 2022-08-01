import { useEffect, useState } from "react"
import getUserLinks from "../../api/dashboard/getUserLinks"

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
            <h2 className="text-center ">User links</h2>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Is protected</th>
                        <th>Key</th>
                        <th>Original link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        links.map(link => {
                            return (
                                <tr>
                                    <td>{link.code}</td>
                                    <td>{link.isProtected ? "Yes" : "No"}</td>
                                    <td>{link.key ? link.key : "None"}</td>
                                    <td>{link.originalLink}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UserLinks