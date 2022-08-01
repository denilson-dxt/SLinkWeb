import { HomeIcon, LinkIcon, LogoutIcon, UserCircleIcon, UserIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"

const DashboardNavigation = (props) => {
    return (
        <Fragment>
            <div className="w-48">
                <nav className="h-full bg-slate-800 pt-1 pl-2">

                    <div className="w-full mb-5 text-center">
                        <Link to={"/"} className="text-white">SLink</Link>
                    </div>
                    <div className="w-full mb-5 text-center">
                        <Link to={"/dashboard"} className="text-white flex">
                            <HomeIcon className="w-6 h-6 mr-3"/>
                            Dashboard
                        </Link>
                    </div>
                    <div className="w-full mb-5 text-center">
                        <Link to={"/dashboard/links"} className="text-white flex">
                            <LinkIcon className="w-6 h-6 mr-3"/>
                            Links
                        </Link>
                    </div>
                    <div className="w-full mb-5 text-center">
                        <Link to={"/profile"} className="text-white flex">
                            <UserCircleIcon className="w-6 h-6 mr-3"/>
                            profile
                        </Link>
                    </div>
                    <div className="w-full mb-5 text-center">
                        <Link to={"/logout"} className="text-white flex">
                            <LogoutIcon className="w-6 h-6 mr-3"/>
                            Logout
                        </Link>
                    </div>

                </nav>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default DashboardNavigation