import '../App.css'
import {useState} from 'react'

const Button = ({icon, text, bgcolor, color}) => {
    const [hover, setHover] = useState(false);
    const changeBg = hover ? 'change' : '';

    return(
        <div 
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        >
            <button style={{ backgroundColor: bgcolor, color: color }} className={`buttons ${changeBg}`}>
                <img src={icon} alt="" />
                {text}
            </button>
        </div>
    )
}

export default Button