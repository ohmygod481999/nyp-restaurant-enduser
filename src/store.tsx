import { atom } from "recoil"

export let cart = atom({
    key: "cart",
    default: []
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