import '../App.css'

const Button = ({icon, text, bgcolor, color, handleMouseIn, handleMouseOut}) => {


    return(
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} >
            <button style={{ backgroundColor: bgcolor, color: color }} className="buttons">
                <img src={icon} alt="" />
                {text}
            </button>
        </div>
    )
}

export default Button