import { useState } from "react"
import { cart } from "../store"
import { useRecoilState } from "recoil"
import { motion } from "framer-motion"
import { GiMeat } from "react-icons/gi"
import { GoPlus } from "react-icons/go"
import { MdPayment } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa"
import { IoFastFoodSharp, IoWine } from "react-icons/io5"
import "./../styles/Modal.css"
import Payment from "./Payment"

interface Props {
    setShowCart: (value: boolean) => void
}

interface CartItem {
    price: number
    thumbnail: string
    name: string
}
export default function Cart({ setShowCart }: Props) {

    const [fullScreen, setFullScreen] = useState<boolean>(false)
    const [_cart_, setCart] = useRecoilState<any>(cart)

    // 

    return <div style={{ padding: `${fullScreen ? "0" : "40px 65px 75px 65px"}` }} className="rs-overlay">
        <div>
            { _cart_.map((item:CartItem, key:number) => <div key={key}>
                <p>Sản phẩm {item.name}</p>
            </div>) }
        </div>
    </div>
}