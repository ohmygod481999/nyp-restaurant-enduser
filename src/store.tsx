import { atom } from "recoil"

export let cart = atom({
    key: "cart",
    default: []
})