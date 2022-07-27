import '../styles/Banner.css'
import logo from '../assets/NBA_logo.png'
function Banner() {
    const title = 'Create your NBA Roster'
    return <div className="banner">
                <img src={logo} alt="logo NBA" className="logo" />
                <h1 className="title"> {title} </h1>
            </div>
}

export default Banner