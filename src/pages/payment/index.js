import { h, Component } from 'preact'
import {Radio, Button} from 'preact-material-components'
import 'preact-material-components/Radio/style.css'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import style from './style'
import add from './../../assets/images/add.svg'
import visa from './../../assets/images/visa.png'
import master from './../../assets/images/master.png'
import discover from './../../assets/images/discover.png'
import american from './../../assets/images/american.png'

export default class Payment extends Component {
  render () {
    return (
      <div>
        <Header title='EASYPIE' />
        <div className='payment'>
          <div className='saved-cards'>
            <h3>Payment Details</h3>
            <div className='saved-card'><Radio name='card' />XXXX XXXX XXXX 3456<img src={visa} /></div>
            <div className='saved-card'><Radio name='card' />XXXX XXXX XXXX 3456<img src={master} /></div>
            <div className='saved-card'><Radio name='card' />XXXX XXXX XXXX 3456<img src={discover} /></div>
            <div className='saved-card'><Radio name='card' />XXXX XXXX XXXX 3456<img src={american} /></div>
            <div className='clear-fix' />
          </div>
          <div className='footer'>
            <Button ripple raised>Pay</Button>
          </div>
        </div>
      </div>
    )
  }
}
