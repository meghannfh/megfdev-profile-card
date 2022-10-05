import photo from '../assets/profileimg.png'
import '../App.css'

const Image = () => {
    return (
        <div className="imgContainer">
            <img src={photo} className="photo" alt="photo of creator" />
        </div>
    )
}

export default Image