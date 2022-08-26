import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoFastFoodOutline } from "react-icons/io5"

export default function Header() {

    const nav = useNavigate()

    return <div className="bg-primary p-3">
        <div className="text-white">
            <div className="title d-flex align-items-center">
                <a className="toggle" href="#">
                    <span />
                </a>
                <h4 onClick={()=>nav(`/`)} className="smart-restaurant-logo font-weight-bold m-0 pl-5"><span><IoFastFoodOutline /></span>SMART RESTAURANT</h4>
                <a className="text-white font-weight-bold ml-auto" data-toggle="modal" data-target="#exampleModal" href="#">Filter</a>
            </div>
        </div>
        <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
            <div className="input-group-prepend">
                <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block"><i className="feather-search" /></button>
            </div>
            <input type="text" className="shadow-none border-0 form-control" placeholder="Search for restaurants or dishes" />
        </div>
    </div>
}