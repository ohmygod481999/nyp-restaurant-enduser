import { useState } from "react"
import "./../styles/Dialog.css"
export default function Dialog({data}:any){
    return <div className="dialog-overlay">
        <div className="dialog bg-primary">+ {data}</div>
    </div>
}