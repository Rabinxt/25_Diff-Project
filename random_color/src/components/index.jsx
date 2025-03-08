import React from 'react'
import { useState } from 'react';

const RandomColor = () => {
    const [color, setColor] = useState('#000000');
    const [colorType , setColorType] = useState("HEX");
    return (
        <div className="container">
            <button>Create HEX color</button>
            <button>Create RGB color</button>
            <button>Generate Random Color</button>
        </div>
    )
}

export default RandomColor;
