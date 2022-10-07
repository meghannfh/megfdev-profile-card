import '../App.css'
import { useState } from 'react'

const Button = ({icon, text, bgcolor, hoverBg, color}) => {
    const [hover, setHover] = useState(false)
    const changeBg = hover ? hoverBg : bgcolor

    function handleMouseIn() {
        setHover(true)
    }

    function handleMouseOut(){
        setHover(false)
    }

    return(
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} >
            <button style={{ backgroundColor: changeBg, color: color }} className="buttons">
                <img src={icon} alt="" />
                {text}
            </button>
        </div>
    )
}

export default Button