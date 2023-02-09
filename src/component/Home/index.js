import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="home-content-container">
      <h1 className="home-main-head">Find The Job That Fits Your Life</h1>
      <p className="home-paragraph">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs" className="link-styles">
        <button type="button" className="home-find-button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
