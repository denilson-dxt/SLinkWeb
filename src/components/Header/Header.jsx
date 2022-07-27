import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const Header = (props)=>{
    return (
        <Fragment>
            <h1></h1>
            <Outlet/>
        </Fragment>
    )
}


export default Header