import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import getLinkByCode from "../../api/client/getLinkByCode"

const GetLink = (props) => {
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(true)
    const [link, setLink] = useState(null)
    const [linkNotFound, setLinkNotFound] = useState(false)
    const [errors, setErrors] = useState([])
    const key = searchParams.get("key") || ""
    useEffect(() => {

        const getLink = async () => {
            await new Promise(r => setTimeout(r, 2000))
            let res = await getLinkByCode(localStorage.getItem("userToken"),params.code, key)
            console.log(res);
            if (res.status == "OK") {
                if (res.data.status == "Ok")
                    setLink(res.data.shortLink)
                else
                    setLinkNotFound(true)
            } else {

            }
            setIsLoading(false)
        }

        getLink()

    }, [])

    const goToLink = () => {
        console.log(link);
        window.open(link.originalLink, "_blank", "noopener,noreferrer")
    }
    return (
        <div className="h-full flex align-center justify-center items-center">
            <div >
                {
                    isLoading
                        ? <button disabled type="button" className="bg-slate-800 w-40 h-10 rounded text-white">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            getting link...
                        </button>
                        : link
                            ?
                            <div>
                                <h1 className="text-xl mb-12">Your link is ready</h1>
                                <button disabled={isLoading} onClick={goToLink} className="w-40 h-10 rounded text-white bg-slate-800">Go to link</button>
                            
                            </div>
                            : !linkNotFound
                                ? <form className="flex  flex-col items-center">
                                    <h1 className="bg-red-500 rounded h-10 flex items-center p-2 w-64">Invalid key or no key given</h1>
                                    <span className="bg-red-500 rounded flex items-center p-2 w-64 mt-1 mb-2">Ask the key to the owner of the link and paste it down and click on the button bellow</span>
                                    <input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded mb-2 focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter key" type="text" name="key" id="" />
                                    <button
                                        className="w-64 h-10 rounded text-white bg-slate-800">
                                        get link
                                    </button>
                                </form>

                                : <h1 className="text-2xl">Ops, I did not find the link you are looking for, SORRY!</h1>

                }

            </div>
        </div>
    )
}

export default GetLink