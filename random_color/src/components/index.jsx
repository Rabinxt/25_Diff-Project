import React from 'react'
import { useState } from 'react';

const index = () => {
    const [color, setcolor] = useState("#000000");
    return (
        <div className="container">
            <button>Create HEX color</button>
            <button>Create RGB color</button>
            <button>Generate Random Color</button>
        </div>
    )
}

export default index
