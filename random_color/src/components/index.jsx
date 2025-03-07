import React from 'react'
import { useState } from 'react';

const Index = () => {
    const [color, setColor] = useState('#000000');
    const [colorType , setColorType] = useState("HEX");
    return (
        <div className="container" style={{
            backgroundColor: color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "white"
        }}>
            <button>Create HEX color</button>
            <button>Create RGB color</button>
            <button>Generate Random Color</button>
        </div>
    )
}

export default Index
