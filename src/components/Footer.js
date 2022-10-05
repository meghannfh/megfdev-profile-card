import '../App.css'
import twitter from '../assets/square-twitter.svg'
import facebook from '../assets/square-facebook.svg'
import github from '../assets/square-github.svg'
import instagram from '../assets/square-instagram.svg'

const Footer = () => {
    return (
        <div className="footerContainer">
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={github} alt="github icon" />
        </div>
    )
}

export default Footer