// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isAnswerDisplay: false}

  showOrHide = () => {
    this.setState(prevState => ({isAnswerDisplay: !prevState.isAnswerDisplay}))
  }

  render() {
    const {isAnswerDisplay} = this.state
    const {faqObj} = this.props
    const {questionText, answerText} = faqObj
    const imgUrl = isAnswerDisplay
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isAnswerDisplay ? 'minus' : 'plus'
    return (
      <li className="faq-item-card">
        <div className="question-card">
          <h1 className="faq-question">{questionText}</h1>
          <button
            type="button"
            className="hide-or-shown-btn"
            onClick={this.showOrHide}
          >
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {isAnswerDisplay && (
          <div>
            <hr />
            <p className="faq-answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
