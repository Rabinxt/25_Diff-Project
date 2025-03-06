import { useState } from "react"
import data from "./accordian/data.js"
import "./accordian/style.css"



export default function Accordian() {

    const [selected, setSelected] = useState(null);

    

    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={() => setSelected(dataItem.id === selected ? null : dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                    </div>)
                    : <div>No Data Present</div>

            }

        </div>   

    </div>
}
