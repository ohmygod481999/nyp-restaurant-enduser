import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Cart from "./Cart"
import "./../styles/Footer.css"

export default function Footer(){

  const { restaurant, branch, table } = useParams()

    const [showCart, setShowCart] = useState<boolean>(false)
    const toggleModal = () => {
      setShowCart(!showCart)
    }

    return <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">

    { showCart && <Cart setShowCart={setShowCart}/> }
    <div className="row">
      <div className="col selected">
        <Link to={`/${restaurant}/${branch}/${table}`} className="text-danger small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-home text-danger" /></p>
          Home
        </Link>
      </div>
      <div className="col">
        <Link to={`/${restaurant}/${branch}/${table}/trending`} className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-map-pin" /></p>
          Trending
        </Link>
      </div>
      <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
        <div className="bg-danger rounded-circle mt-n0 shadow">
          <a onClick={toggleModal} className="footer-button text-white small font-weight-bold text-decoration-none">
            <i className="feather-shopping-cart" />
          </a>
        </div>
      </div>
      <div className="col">
        <Link to="" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-heart" /></p>
          Favorites
        </Link>
      </div>
      <div className="col">
        <Link to="" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-user" /></p>
          Profile
        </Link>
      </div>
    </div>
  </div>
}