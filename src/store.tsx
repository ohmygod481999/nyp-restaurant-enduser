import { atom } from "recoil"
import { Order } from "./types"

export let cart = atom({
    key: "cart",
    default: []
})

export let _orderState = atom<Order | null>({
    key: "order",
    default: null
})

export let targetStore = atom({
    key: "store",
    default: NaN
})

export let targetZone = atom({
    key: "zone",
    default: NaN
})

export let targetTable = atom({
    key: "table",
    default: NaN
})