import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookie from 'js-cookie'

const Header = props => {
  const onLogoutClick = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <div className="header-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="header-logo-image"
        />
      </div>
      <ul className="large-nav-items">
        <Link to="/" className="link-styles">
          <li className="home-jobs-nav-link-text-large">Home</li>
        </Link>
        <Link to="/jobs" className="link-styles">
          <li className="home-jobs-nav-link-text-large">Jobs</li>
        </Link>
      </ul>
      <div className="logout-container">
        <Link to="/" className="link-styles">
          <AiFillHome className="home-small-device" size={25} />
        </Link>
        <Link to="/jobs" className="link-styles">
          <BsFillBriefcaseFill className="job-small-device" size={25} />
        </Link>
        <FiLogOut
          className="logout-small-device"
          size={25}
          onClick={onLogoutClick}
        />
        <button
          type="button"
          className="logout-large-device"
          onClick={onLogoutClick}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
