import React from "react"
import { Link } from "react-router-dom"
export default function Landing() {
    return <div>
        <div className="bg-primary d-flex align-items-center justify-content-center vh-100 index-page">
            <div className="text-center"><Link to="/81/18/24"><img src="img/logo.png" alt="" /></Link><br />
                <div className="spinner" /></div>
        </div>
        <div className="fixed-bottom d-flex align-items-center justify-content-center">
            <Link className="btn btn-block d-flex align-items-center btn-lg btn-warning" to="/signin">
                Get Started <i className="feather-arrow-right ml-auto" />
            </Link>
        </div>
    </div>
}