import { h, Component } from 'preact'
import Button from 'preact-material-components/Button'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import style from './style'

export default class Contact extends Component {
  render () {
    return (
      <div>
        <Header title='Contact Us' />
        <div className='contact'>
          <div className='form-fields'>
            <select>
              <option value=''>Question about</option>
              <option value='our_technology'>Our Technology</option>
              <option value='our_food'>Our Food</option>
              <option value='complaints_suggestions'>Complaints &amp; Suggestions</option>
            </select>
          </div>
          <div className='form-fields'>
            <textarea placeholder='Type your message here' />
          </div>
          <div className='footer'>
            <Button ripple raised>Send</Button>
          </div>
        </div>
      </div>
    )
  }
}
