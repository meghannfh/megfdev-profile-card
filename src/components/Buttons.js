import Button from './Button'
import linkedin from '../assets/linkedin.svg'
import email from '../assets/envelope-solid.svg'


const Buttons = () => {
    return (
        <div className="btnContainer">
            <a href="megfdev.netlify.com">
                <Button 
                bgcolor='rgb(255, 255, 255)'
                hoverBg='rgb(198, 198, 198)'
                icon={email} 
                text='Email' />
            </a>
            <a href="https://www.linkedin.com/in/meghannfh/">
                <Button 
                color="white" 
                bgcolor="#5093E2"
                hoverBg='rgb(51, 111, 180)'
                icon={linkedin} 
                text='LinkedIn' />
            </a>
        </div>
    )
}


export default Buttons