import photo from '../assets/profileimg.png'
import '../App.css'

const Image = () => {
    return (
        <div className="imgContainer">
            <img src={photo} className="photo" alt="creator" />
        </div>
    )
}

export default Image