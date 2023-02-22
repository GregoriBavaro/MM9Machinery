import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const AboutUsLayout = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default AboutUsLayout;