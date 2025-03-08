import React from 'react'
import { useState } from 'react';
import './styles/RandomColor.css';

const RandomColor = () => {
    const [color, setColor] = useState('#000600');
    const [colorType, setColorType] = useState("HEX");

    const handleCreateRandomHEXColor = () => {
        const hex = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexcolor = '#';
        for (let i = 0; i < 6; i++) {
            hexcolor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(hexcolor);
    }


    const handleCreateRandomRGBColor = () => {
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)

        setColor('rgb(' + r + ',' + g + ',' + b + ')');
    }

    return (
        <div className="container" style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>
            <h1 style={
                {
                    color: 'white'}
            }>Random Color</h1>
            <button onClick={() => setColorType('HEX')}>Create HEX color</button>
            <button onClick={() => setColorType('RGB')}>Create RGB color</button>
            <button onClick={()=> colorType === 'HEX' ? handleCreateRandomHEXColor() : handleCreateRandomRGBColor()}>Generate Random Color</button>

            <div>
                <h1>{color}</h1>
                <h2>{colorType}</h2>
            </div>
        </div>
    )
}

export default RandomColor;
