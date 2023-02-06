// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  showFirstName = () => {
    this.setState(prevState => {
      if (prevState.isFirstName === false) {
        return {
          isFirstName: true,
          isLastName: prevState.isLastName,
        }
      }
      return {
        isFirstName: false,
        isLastName: prevState.isLastName,
      }
    })
  }

  showLastName = () => {
    this.setState(prevState => {
      if (prevState.isLastName === false) {
        return {
          isFirstName: prevState.isFirstName,
          isLastName: true,
        }
      }
      return {
        isFirstName: prevState.isFirstName,
        isLastName: false,
      }
    })
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="show-hide-container">
          <div className="show-hide-firstname">
            <button type="button" className="btn" onClick={this.showFirstName}>
              Show/Hide Firstname
            </button>
            {isFirstName && (
              <div className="show-hide">
                <p> Joe </p>
              </div>
            )}
          </div>
          <div className="show-hide-lastname">
            <button type="button" className="btn" onClick={this.showLastName}>
              Show/Hide Lastname
            </button>
            {isLastName && (
              <div className="show-hide">
                <p> Jonas </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
