import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const DashboardNavigation = (props) => {
    return (
        <Fragment>
            <div>
                <h2>Menu</h2>
            </div>
            <Outlet/>
        </Fragment>
    )
}


export default DashboardNavigation