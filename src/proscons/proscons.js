import React, { useState } from 'react'
import style from './proscons.module.css'
export default function ProsCons() {

    const [header, setHeader] = useState("Could I Get Hired?")
    const [pros, setPros] = useState(
        [
            { value: "Hard Worker", id: 1 },
            { value: "Fast Learner", id: 2 },
            { value: "Analitical Skills", id: 3 },
            { value: "Friendly", id: 4 },
            { value: "The list will go a lot xd)", id: 5 },
            { value: "", id: 6 },
        ]
    )
    const [cons, setCons] = useState(
        [
            { value: "Nothing Here :)", id: 1 },
            { value: "", id: 2 }
        ]
    )

    return (
        <div className={style.container} >
            <div className={style.headerContiner}>
                <input
                    className={style.headerInp}
                    value={header}
                    onChange={(e) => { setHeader(e.target.value) }}
                />
            </div>
            <div className={style.sides}>
                <div className={style.sideHeader}>pros</div>
                <div className={style.sideContent}>
                    {pros.map((item, i) => {
                        return <ListItem
                            key={item.id}
                            index={i}
                            item={item}
                            arr={pros}
                            setter={setPros}
                        />
                    })}
                </div>
            </div>
            <div className={style.sides}>
                <div className={style.sideHeader}>cons</div>
                <div className={style.sideContent}>
                    {cons.map((item, i) => {
                        return <ListItem
                            key={item.id}
                            index={i}
                            item={item}
                            arr={cons}
                            setter={setCons}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}


function ListItem({ index, item, arr, setter, handleValueChange }) {


    function handleValueChange(e, arr, setter, index) {
        let clone = JSON.parse(JSON.stringify(arr)) // or deep clone here
        clone[index].value = e.target.value
        if (!e.target.value) {
            clone.splice(index, 1)
            setter(clone)
            return
        }
        if (clone[clone.length - 1].value) {
            clone.push({ value: "", id: Date.now() })
        }
        setter(clone)
    }

    return <div className={style.input} >
        <div className={style.inputBg}>
            <span className={style.inpIndex} > {index + 1}. </span>
            <input
                className={style.inp}
                value={item.value}
                onChange={(e) => { handleValueChange(e, arr, setter, index) }}
            />
        </div>
    </div>
}