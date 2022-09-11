import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DishFilter from "../components/DishFilter";
import Footer from "../components/Footer";
import { targetZone, targetStore, targetTable } from "../store";
import Trending from "../components/Trending";
import {
    GET_PRODUCT,
    GET_ORDER,
    ORDER_ITEMS_SUBSCRIPTION,
} from "./../requests/products";
import { useQuery, useMutation, useSubscription } from "@apollo/client";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import Product from "../components/Product";

export default function Home() {
    let { company_id, branch_id, table_id } = useParams();
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: {
            company_id,
        },
    });
    // const [_targetStore_, setTargetStore] = useRecoilState<any>(targetStore);
    // const [_targetZone_, setTargetZone] = useRecoilState<any>(targetZone);
    // const [_targetTable_, setTargetTable] = useRecoilState<any>(targetTable);

    return (
        <div>
            <div className="osahan-home-page">
                <Header />
                {/* Filters */}
                <div className="bg-light">
                    <br />
                    <DishFilter />
                    <br />
                    {/* Trending this week */}

                    {/* <Trending /> */}
                    <div className="px-3 pb-3 title d-flex align-items-center">
                        <h5 className="m-0 pt-3">Danh sách món ăn</h5>
                        <Link className="pt-3 font-weight-bold ml-auto" to="">
                            Xem thêm <i className="feather-chevrons-right" />
                        </Link>
                    </div>
                    {/* Most popular */}
                    <div className="most_popular px-3">
                        <div className="row">
                            {data?.product?.map((item: any, index: number) => (
                                <Product key={index} data={item} />
                            ))}
                        </div>
                    </div>
                    {/* Most sales */}

                    {/* Most sales */}
                </div>

                {/* Footer */}
                <Footer />
            </div>
            <nav id="main-nav">
                <ul className="second-nav">
                    <li>
                        <a href="index.html">
                            <i className="feather-grid mr-2" /> Intro
                        </a>
                    </li>
                    <li>
                        <a href="landing.html">
                            <i className="feather-layers mr-2" /> Landing
                        </a>
                    </li>
                    <li>
                        <a href="home.html">
                            <i className="feather-home mr-2" /> Homepage
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="feather-edit-2 mr-2" /> Authentication
                        </a>
                        <ul>
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                            <li>
                                <a href="signup.html">Register</a>
                            </li>
                            <li>
                                <a href="forgot_password.html">
                                    Forgot Password
                                </a>
                            </li>
                            <li>
                                <a href="verification.html">Verification</a>
                            </li>
                            <li>
                                <a href="location.html">Location</a>
                            </li>
                            <li>
                                <a href="select_country.html">Select Country</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="trending.html">
                            <i className="feather-trending-up mr-2" /> Trending
                        </a>
                    </li>
                    <li>
                        <a href="most_popular.html">
                            <i className="feather-award mr-2" /> Most Popular
                        </a>
                    </li>
                    <li>
                        <a href="restaurant.html">
                            <i className="feather-paperclip mr-2" /> Restaurant
                            Detail
                        </a>
                    </li>
                    <li>
                        <a href="recipe.html">
                            <i className="feather-file-text mr-2" /> Recipe
                        </a>
                    </li>
                    <li>
                        <a href="checkout.html">
                            <i className="feather-list mr-2" /> Checkout
                        </a>
                    </li>
                    <li>
                        <a href="map.html">
                            <i className="feather-map-pin mr-2" /> Live Map
                        </a>
                    </li>
                    <li>
                        <a href="payment.html">
                            <i className="feather-credit-card mr-2" /> Payment
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="feather-user mr-2" /> Profile
                        </a>
                        <ul>
                            <li>
                                <a href="profile.html">Profile</a>
                            </li>
                            <li>
                                <a href="favorites.html">Favorites</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="feather-book mr-2" /> Pages
                        </a>
                        <ul>
                            <li>
                                <a href="filters.html">Filters</a>
                            </li>
                            <li>
                                <a href="terms.html">Terms &amp; conditions</a>
                            </li>
                            <li>
                                <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                                <a href="privacy.html">Privacy &amp; Policy</a>
                            </li>
                            <li>
                                <a href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="feather-alert-triangle mr-2" /> Error
                        </a>
                        <ul>
                            <li>
                                <a href="not-found.html">Not Found</a>
                            </li>
                            <li>
                                <a href="maintence.html"> Maintence</a>
                            </li>
                            <li>
                                <a href="coming-soon.html">Coming Soon</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="feather-link mr-2" /> Navigation Link
                            Example
                        </a>
                        <ul>
                            <li>
                                <a href="#">Link Example 1</a>
                                <ul>
                                    <li>
                                        <a href="#">Link Example 1.1</a>
                                        <ul>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Link Example 1.2</a>
                                        <ul>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                            <li>
                                                <a href="#">Link</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Link Example 2</a>
                            </li>
                            <li>
                                <a href="#">Link Example 3</a>
                            </li>
                            <li>
                                <a href="#">Link Example 4</a>
                            </li>
                            <li data-nav-custom-content>
                                <div className="custom-message">
                                    You can add any custom content to your
                                    navigation items. This text is just an
                                    example.
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="bottom-nav">
                    <li className="email">
                        <a className="text-danger" href="home.html">
                            <p className="h5 m-0">
                                <i className="feather-home text-danger" />
                            </p>
                            Home
                        </a>
                    </li>
                    <li className="github">
                        <a href="faq.html">
                            <p className="h5 m-0">
                                <i className="feather-message-circle" />
                            </p>
                            FAQ
                        </a>
                    </li>
                    <li className="ko-fi">
                        <a href="contact-us.html">
                            <p className="h5 m-0">
                                <i className="feather-phone" />
                            </p>
                            Help
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Filter
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
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
                                        <input
                                            type="radio"
                                            id="customRadio1"
                                            name="location"
                                            className="custom-control-input"
                                            defaultChecked
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="customRadio1"
                                        >
                                            Top Rated
                                        </label>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-radio">
                                        <input
                                            type="radio"
                                            id="customRadio2"
                                            name="location"
                                            className="custom-control-input"
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="customRadio2"
                                        >
                                            Nearest Me
                                        </label>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-radio">
                                        <input
                                            type="radio"
                                            id="customRadio3"
                                            name="location"
                                            className="custom-control-input"
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="customRadio3"
                                        >
                                            Cost High to Low
                                        </label>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-radio">
                                        <input
                                            type="radio"
                                            id="customRadio4"
                                            name="location"
                                            className="custom-control-input"
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="customRadio4"
                                        >
                                            Cost Low to High
                                        </label>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-radio">
                                        <input
                                            type="radio"
                                            id="customRadio5"
                                            name="location"
                                            className="custom-control-input"
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="customRadio5"
                                        >
                                            Most Popular
                                        </label>
                                    </div>
                                    {/* Filter */}
                                    <div className="p-3 bg-light border-bottom">
                                        <h6 className="m-0">FILTER</h6>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="defaultCheck1"
                                            defaultChecked
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="defaultCheck1"
                                        >
                                            Open Now
                                        </label>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="defaultCheck2"
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="defaultCheck2"
                                        >
                                            Credit Cards
                                        </label>
                                    </div>
                                    <div className="custom-control border-bottom px-0  custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="defaultCheck3"
                                        />
                                        <label
                                            className="custom-control-label py-3 w-100 px-3"
                                            htmlFor="defaultCheck3"
                                        >
                                            Alcohol Served
                                        </label>
                                    </div>
                                    {/* Filter */}
                                    <div className="p-3 bg-light border-bottom">
                                        <h6 className="m-0">
                                            ADDITIONAL FILTERS
                                        </h6>
                                    </div>
                                    <div className="px-3 pt-3">
                                        <input
                                            type="range"
                                            className="custom-range"
                                            min={0}
                                            max={100}
                                        />
                                        <div className="form-row">
                                            <div className="form-group col-6">
                                                <label>Min</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="$0"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group text-right col-6">
                                                <label>Max</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="$1,0000"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer p-0 border-0">
                            <div className="col-6 m-0 p-0">
                                <button
                                    type="button"
                                    className="btn border-top btn-lg btn-block"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="col-6 m-0 p-0">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
