import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstNameVisible: false,
    lastNameVisible: false,
  }

  onFirstNameButtonClick = () => {
    this.setState(pervState => ({
      firstNameVisible: !pervState.firstNameVisible,
    }))
  }

  onLastNameButtonClick = () => {
    this.setState(pervState => ({
      lastNameVisible: !pervState.lastNameVisible,
    }))
  }

  onVisiblityFirstName = () => {
    const {firstNameVisible} = this.state
    return firstNameVisible ? 'Joe' : null
  }

  onVisiblityLastName = () => {
    const {lastNameVisible} = this.state
    return lastNameVisible ? 'Jonas' : null
  }

  render() {
    const firstName = this.onVisiblityFirstName()
    const lastName = this.onVisiblityLastName()
    return (
      <div className="bg">
        <h1 className="head">Show/Hide</h1>
        <div className="name-container">
          <div className="single-name-container">
            <button
              className="button"
              type="button"
              onClick={this.onFirstNameButtonClick}
            >
              Show/Hide Firstname
            </button>
            <p>{firstName}</p>
          </div>
          <div className="single-name-container">
            <button
              className="button"
              type="button"
              onClick={this.onLastNameButtonClick}
            >
              Show/Hide Lastname
            </button>
            <p>{lastName}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
