import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'

class Login extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 2})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showErrorMsg: true, errorMsg: error})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onFormSubmission = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookie.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <form className="form-container" onSubmit={this.onFormSubmission}>
          <div className="form-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="form-logo-image"
            />
          </div>
          <label htmlFor="username" className="username-password-label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-password-input-field"
            placeholder="Username"
            onChange={this.onUsernameChange}
          />
          <label htmlFor="password" className="username-password-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="username-password-input-field"
            placeholder="Password"
            onChange={this.onPasswordChange}
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMsg && <p className="error-msg">* {errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
