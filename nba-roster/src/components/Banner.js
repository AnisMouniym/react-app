import '../styles/Banner.css'
import logo from '../assets/NBA_logo.png'
import Period from './Period'
function Banner() {
    const title = 'Create your NBA Roster'
    return (
    <div className="banner">
        <img src={logo} alt="logo NBA" className="logo" />
        <h1 className="title"> {title} </h1>
        <Period />
    </div>
    )
}

export default Banner