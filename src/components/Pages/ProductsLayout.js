import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const ProductsLayout = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default ProductsLayout;