import '../App.css'
// import Social from './Social'
import twitter from '../assets/square-twitter.svg'
import facebook from '../assets/square-facebook.svg'
import github from '../assets/square-github.svg'
import instagram from '../assets/square-instagram.svg'

const Footer = () => {
    return (
        <div className="footerContainer">
            <img src={twitter} alt="twitter icon" className="socials"/>
            <img src={facebook} alt="facebook icon" className="socials"/>
            <img src={instagram} alt="instagram icon" className="socials"/>
            <img src={github} alt="github icon" className="socials"/>
        </div>
    )
}

export default Footer