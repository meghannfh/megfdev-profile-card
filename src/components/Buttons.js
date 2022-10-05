import Button from './Button'
import linkedin from '../assets/linkedin.svg'
import email from '../assets/envelope-solid.svg'

const Buttons = () => {
    return (
        <div className="btnContainer">
            <a href="megfdev.netlify.com">
            <Button bgcolor="white" icon={email} text='Email' />
            </a>
            <a href="https://www.linkedin.com/in/meghannfh/">
            <Button color="white" bgcolor="#5093E2" icon={linkedin} text='LinkedIn' />
            </a>
        </div>
    )
}


export default Buttons