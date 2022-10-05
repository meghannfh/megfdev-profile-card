import Button from './Button'
import linkedin from '../assets/linkedin.svg'
import email from '../assets/envelope-solid.svg'
import {useState} from 'react'

const Buttons = () => {
    const [hover, setHover] = useState(false)

    function handleMouseIn() {
        setHover(true)
    }

    function handleMouseOut(){
        setHover(false)
    }

    return (
        <div className="btnContainer">
            <a href="megfdev.netlify.com">
                <Button 
                handleMouseIn={handleMouseIn} 
                handleMouseOut={handleMouseOut} 
                bgcolor={hover ? 'rgb(198, 198, 198)' : 'rgb(255, 255, 255)'} 
                icon={email} 
                text='Email' />
            </a>
            <a href="https://www.linkedin.com/in/meghannfh/">
                <Button 
                handleMouseIn={handleMouseIn} 
                handleMouseOut={handleMouseOut} 
                color="white" 
                bgcolor={hover ? 'rgb(51, 111, 180)' : "#5093E2"} 
                icon={linkedin} 
                text='LinkedIn' />
            </a>
        </div>
    )
}


export default Buttons