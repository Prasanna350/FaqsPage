// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="faq-head">FAQs</h1>
        <ul className="faqs-container">
          {faqsList.map(faqObj => (
            <FaqItem faqObj={faqObj} key={faqObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
