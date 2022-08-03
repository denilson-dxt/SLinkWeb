import { PencilIcon, TrashIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"


const LinksTable = (props) => {
    return (
        <table className="mx-auto mt-4 w-full whitespace-nowrap  bg-white divide-y divide-gray-300 overflow-hidden">
            <thead className="bg-gray-900">
                <tr className="text-white text-center">
                    <th className="font-semibold text-sm uppercase px-6 py-4">Code</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">Is protected</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Key</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-left">Original link</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-left"></th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-left"></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {
                    props.links.map(link => {
                        return (
                            <tr>
                                <td className="px-6 py-4 text-center">{link.code}</td>
                                <td className="px-6 py-4 text-center">{link.isProtected ? "Yes" : "No"}</td>
                                <td className="px-6 py-4 text-center">{link.key ? link.key : "None"}</td>
                                <td className="px-6 py-4 text-left">{link.originalLink}</td>
                                <td className="px-6 py-4 text-left cursor-pointer">
                                    <Link to={`/dashboard/edit-link/${link.code}`}>
                                        <PencilIcon color="green" />
                                    </Link>
                                </td>
                                <td className="px-6 py-4 text-left cursor-pointer"> <TrashIcon color="red" /> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default LinksTable