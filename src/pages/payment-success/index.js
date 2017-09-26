import { h, Component } from 'preact'

import Header from './../../components/header'
import style from './style'
import success from './../../assets/images/order-success.png'

export default class PaymentSuccess extends Component {
  render () {
    return (
      <div>
        <Header title='EASYPIE' />
        <div className='payment-success'>
          <img src={success} />
        </div>
      </div>
    )
  }
}
