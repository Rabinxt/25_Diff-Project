import React from 'react'
import { useState } from 'react';
import data from './data.jsx';
import './styles.css';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    return <div className="wrapper">
        <h1>Accordian</h1>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={() => setSelected(dataItem.id === selected ? null : dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ? 
                            <div>{dataItem.answer}</div>
                            : null
                        }
                    </div>)
                    :<div>No Data Present</div>
            }
        </div>
    </div>
}

export default Accordian;

