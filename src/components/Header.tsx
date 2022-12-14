import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
export default function Header() {
    const nav = useNavigate();
    const { company_id, branch_id, table_id } = useParams();
    let { keyword } = useParams();
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <div className="bg-primary p-3">
            <div className="text-white">
                <div className="title d-flex align-items-center">
                    <a className="toggle" href="#">
                        <span />
                    </a>
                    <h4
                        onClick={() =>
                            nav(`/${company_id}/${branch_id}/${table_id}`)
                        }
                        className="smart-restaurant-logo font-weight-bold m-0"
                    >
                        <span>
                            <IoFastFoodOutline />
                        </span>
                        SMART RESTAURANT
                    </h4>
                    {/* <a
            className="text-white font-weight-bold ml-auto"
            data-toggle="modal"
            data-target="#exampleModal"
            href="#"
          >
            Filter
          </a> */}
                </div>
            </div>
            <form
                className="input-group mt-3 rounded shadow-sm overflow-hidden"
                onSubmit={(e) => {
                    e.preventDefault();
                    // console.log(searchValue);
                    if (!searchValue) {
                        nav(`/${company_id}/${branch_id}/${table_id}/home`);
                    } else {
                        nav(
                            `/${company_id}/${branch_id}/${table_id}/q=${searchValue}`
                        );
                    }
                }}
            >
                <div className="input-group-prepend">
                    <button
                        onClick={() => {
                            // console.log(searchValue);
                            // if (!searchValue) {
                            //     nav(
                            //         `/${company_id}/${branch_id}/${table_id}/home`
                            //     );
                            // }
                            // nav(
                            //     `/${company_id}/${branch_id}/${table_id}/q=${searchValue}`
                            // );
                        }}
                        className="border-0 btn btn-outline-secondary text-dark bg-white btn-block"
                    >
                        <i className="feather-search" />
                    </button>
                </div>
                <input
                    onChange={(e: any) => setSearchValue(e.target.value)}
                    defaultValue={keyword}
                    type="text"
                    className="shadow-none border-0 form-control"
                    placeholder="T??m ki???m m??n"
                />
            </form>
        </div>
    );
}
