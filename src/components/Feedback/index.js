import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickButton = () => {
    this.setState({isFeedbackSelected: true})
  }

  thankYouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <>
        <div className="thanks-container">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
          <h1 className="thanks-heading">Thank You!</h1>
          <p className="feedback">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </>
    )
  }

  feedBackContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <>
        <div className="emoji-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-section">
            {emojis.map(emoji => (
              <li className="list-element" key={emoji.id}>
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickButton}
                >
                  <img
                    src={emoji.imageUrl}
                    className="emoji"
                    alt={emoji.name}
                  />
                </button>
                <p className="emoji-expression">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <>
        <div className="container">
          <div className="feedBack-container">
            {isFeedbackSelected
              ? this.thankYouContainer()
              : this.feedBackContainer()}
          </div>
        </div>
      </>
    )
  }
}

export default Feedback
