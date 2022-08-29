import { useEffect } from "react"
import { useParams } from "react-router-dom"
import DishFilter from "../components/DishFilter"
import Footer from "../components/Footer"
import { targetZone, targetStore } from "../store"
import Trending from "../components/Trending"
import { GET_PRODUCT, CREATE_ORDER, GET_ORDER, ORDER_ITEMS_SUBSCRIPTION } from "./../requests/products"
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import Header from "../components/Header"
import { useRecoilState } from "recoil"
import Product from "../components/Product"

export default function Home() {

  let { restaurant, branch, table } = useParams()
  const { loading, error, data } = useQuery(GET_PRODUCT)
  const [_targetStore_, setTargetStore] = useRecoilState<any>(targetStore)
  const [_targetZone_, setZone] = useRecoilState<any>(targetZone)
  const [createOrder, createOrderResponse] = useMutation(CREATE_ORDER)


  useEffect(() => {
    setTargetStore(restaurant)
    setZone(branch)

    // khởi tạo hóa đơn khi khách vào bàn
    const handleCreateStore = () => {
      createOrder({
        variables: {
          store_id: restaurant,
          table_id: table
        }, onError: () => {
          console.log(`Error: Existed Order`)
        }
      })
    }; handleCreateStore()
  }, [])

  return <div>
    <div className="osahan-home-page">
      <Header />
      {/* Filters */}
      <div className="bg-light">
        <br />
        <DishFilter />
        <br />
        {/* Trending this week */}

        <div className="px-3 pt-3 title d-flex align-items-center">
          <h5 className="m-0">Trending this week</h5>
          <a className="font-weight-bold ml-auto" href="trending.html">View all <i className="feather-chevrons-right" /></a>
        </div>
        {/* slider */}
        <Trending />
        {/* Most popular */}
        <div className="px-3 pb-3 title d-flex align-items-center">
          <h5 className="m-0 pt-3">Most popular</h5>
          <a className="pt-3 font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
        </div>
        {/* Most popular */}
        <div className="most_popular px-3">
          <div className="row">
            {data?.product?.map((item: any, index: number) => <Product key={index} data={item} />)}
          </div>
        </div>
          {/* Most sales */}
          <div className="p-3 title d-flex align-items-center">
            <h5 className="m-0 pt-3">Most sales</h5>
            <a className="pt-3 font-weight-bold ml-auto" href="#">26 places <i className="feather-chevrons-right" /></a>
          </div>
          {/* Most sales */}
          <div className="most_sale px-3 pb-3">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span></div>
                    <div className="favourite-heart text-danger position-absolute"><a href="#"><i className="feather-heart" /></a></div>
                    <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                    <a href="restaurant.html">
                      <img src="img/sales1.png" className="img-fluid item-img w-100" />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
                      </a>
                      </h6>
                      <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                      <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span></p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-2">
                <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span></div>
                    <div className="favourite-heart text-danger position-absolute"><a href="#"><i className="feather-heart" /></a></div>
                    <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                    <a href="restaurant.html">
                      <img src="img/sales2.png" className="img-fluid item-img w-100" />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Cuisine</a></h6>
                      <p className="text-gray mb-3">North Indian • Indian • Pure veg</p>
                      <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 30–35 min</span> <span className="float-right text-black-50"> $250 FOR TWO</span></p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-success">OFFER</span> <small>65% off</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-2">
                <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span></div>
                    <div className="favourite-heart text-danger position-absolute"><a href="#"><i className="feather-heart" /></a></div>
                    <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                    <a href="restaurant.html">
                      <img src="img/sales3.png" className="img-fluid item-img w-100" />
                    </a>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
                      </a>
                      </h6>
                      <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                      <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span></p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      <nav id="main-nav">
        <ul className="second-nav">
          <li><a href="index.html"><i className="feather-grid mr-2" /> Intro</a>
          </li><li><a href="landing.html"><i className="feather-layers mr-2" /> Landing</a>
          </li><li><a href="home.html"><i className="feather-home mr-2" /> Homepage</a></li>
          <li>
            <a href="#"><i className="feather-edit-2 mr-2" /> Authentication</a>
            <ul>
              <li><a href="login.html">Login</a>
              </li><li><a href="signup.html">Register</a>
              </li><li><a href="forgot_password.html">Forgot Password</a>
              </li><li><a href="verification.html">Verification</a>
              </li><li><a href="location.html">Location</a>
              </li><li><a href="select_country.html">Select Country</a>
              </li></ul>
          </li>
          <li><a href="trending.html"><i className="feather-trending-up mr-2" /> Trending</a>
          </li><li><a href="most_popular.html"><i className="feather-award mr-2" /> Most Popular</a>
          </li><li><a href="restaurant.html"><i className="feather-paperclip mr-2" /> Restaurant Detail</a>
          </li><li><a href="recipe.html"><i className="feather-file-text mr-2" /> Recipe</a>
          </li><li><a href="checkout.html"><i className="feather-list mr-2" /> Checkout</a>
          </li><li><a href="map.html"><i className="feather-map-pin mr-2" /> Live Map</a>
          </li><li><a href="payment.html"><i className="feather-credit-card mr-2" /> Payment</a>
          </li><li>
            <a href="#"><i className="feather-user mr-2" /> Profile</a>
            <ul>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="favorites.html">Favorites</a>
              </li></ul>
          </li>
          <li>
            <a href="#"><i className="feather-book mr-2" /> Pages</a>
            <ul>
              <li><a href="filters.html">Filters</a>
              </li><li><a href="terms.html">Terms &amp; conditions</a>
              </li><li><a href="faq.html">FAQ</a>
              </li><li><a href="privacy.html">Privacy &amp; Policy</a>
              </li><li><a href="contact-us.html">Contact Us</a>
              </li></ul>
          </li>
          <li>
            <a href="#"><i className="feather-alert-triangle mr-2" /> Error</a>
            <ul>
              <li><a href="not-found.html">Not Found</a>
              </li><li><a href="maintence.html"> Maintence</a>
              </li><li><a href="coming-soon.html">Coming Soon</a>
              </li></ul>
          </li>
          <li>
            <a href="#"><i className="feather-link mr-2" /> Navigation Link Example</a>
            <ul>
              <li>
                <a href="#">Link Example 1</a>
                <ul>
                  <li>
                    <a href="#">Link Example 1.1</a>
                    <ul>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Link Example 1.2</a>
                    <ul>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Link Example 2</a></li>
              <li><a href="#">Link Example 3</a></li>
              <li><a href="#">Link Example 4</a></li>
              <li data-nav-custom-content>
                <div className="custom-message">
                  You can add any custom content to your navigation items. This text is just an example.
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <a className="text-danger" href="home.html">
              <p className="h5 m-0"><i className="feather-home text-danger" /></p>
              Home
            </a>
          </li>
          <li className="github">
            <a href="faq.html">
              <p className="h5 m-0"><i className="feather-message-circle" /></p>
              FAQ
            </a>
          </li>
          <li className="ko-fi">
            <a href="contact-us.html">
              <p className="h5 m-0"><i className="feather-phone" /></p>
              Help
            </a>
          </li>
        </ul>
      </nav>
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="osahan-filter">
                <div className="filter">
                  {/* SORT BY */}
                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">SORT BY</h6>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio1" name="location" className="custom-control-input" defaultChecked />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio1">Top Rated</label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio2" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio2">Nearest Me</label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio3" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio3">Cost High to Low</label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio4" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio4">Cost Low to High</label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-radio">
                    <input type="radio" id="customRadio5" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio5">Most Popular</label>
                  </div>
                  {/* Filter */}
                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">FILTER</h6>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck1" defaultChecked />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck1">Open Now</label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck2" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck2">Credit Cards</label>
                  </div>
                  <div className="custom-control border-bottom px-0  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultCheck3" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck3">Alcohol Served</label>
                  </div>
                  {/* Filter */}
                  <div className="p-3 bg-light border-bottom">
                    <h6 className="m-0">ADDITIONAL FILTERS</h6>
                  </div>
                  <div className="px-3 pt-3">
                    <input type="range" className="custom-range" min={0} max={100} />
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label>Min</label>
                        <input className="form-control" placeholder="$0" type="number" />
                      </div>
                      <div className="form-group text-right col-6">
                        <label>Max</label>
                        <input className="form-control" placeholder="$1,0000" type="number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer p-0 border-0">
              <div className="col-6 m-0 p-0">
                <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
              </div>
              <div className="col-6 m-0 p-0">
                <button type="button" className="btn btn-primary btn-lg btn-block">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}