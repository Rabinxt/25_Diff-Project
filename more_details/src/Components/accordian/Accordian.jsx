import React, { useState } from 'react';
import data from './data.jsx';
import './styles.css';

const Accordian = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (id) => {
        setSelected(selected === id ? null : id);
    };

    return (
        <div className="wrapper">
            <h1>Accordion</h1>
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item" key={dataItem.id}>
                                <div className="title" onClick={() => handleClick(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>
                                    <span>{selected === dataItem.id ? '-' : '+'}</span>
                                </div>
                                {selected === dataItem.id && (
                                    <div className="content">{dataItem.answer}</div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div>No Data Present</div>
                    )
                }
            </div>
        </div>
    );
};

export default Accordian;