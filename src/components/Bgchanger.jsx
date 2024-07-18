import { useState } from 'react';
// import './react.css'

const Bgchanger = () => {
    const [color, setColor] = useState("grey");
    return (
        <>
            <div id="main" style={{ backgroundColor: color }}>
                <div className="wideBox">

                    <button onClick={() => setColor("red")} className='button' style={{ backgroundColor: "red" }}>Red</button>

                    <button onClick={() => setColor("blue")} className='button' style={{ backgroundColor: "blue" }}>Blue</button>

                    <button onClick={() => setColor("crimson")} className='button' style={{ backgroundColor: "crimson" }}>Crimson</button>

                    <button onClick={() => setColor("green")} className='button' style={{ backgroundColor: "green" }}>Green</button>

                    <button onClick={() => setColor("orangered")} className='button' style={{ backgroundColor: "orangered" }}>Orange</button>

                    <button onClick={() => setColor("purple")} className='button' style={{ backgroundColor: "purple" }}>Purple</button>

                </div>
            </div>
        </>
    )
}

export default Bgchanger;