import { h, Component } from 'preact'
import {Radio, Button, Icon, Dialog, Textfield} from 'preact-material-components'
import 'preact-material-components/Radio/style.css'
import 'preact-material-components/Button/style.css'
import 'preact-material-components/Dialog/style.css'
import 'preact-material-components/Textfield/style.css'

import Header from './../../components/header'
import Address from './../../components/address'
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
          <div className='cart-item'>
            <div className='item-count'>1 Item</div>
            <div className='item-price'>$2.99</div>
          </div>
          <div className='card'>
            <div className='destination'>
              <div className='delivery'><Radio id='delivery' name='destination' checked /><label for='delivery'>Delivery</label></div>
              <div className='pickup'><Radio id='pickup' name='destination' /><label for='pickup'>Pickup</label></div>
            </div>
            <div>
              <div className='card_title'><Radio id='home' name='address' checked /><label for='home'>Home</label></div>
              <div className='card_name'>Nitesh Pathak</div>
              <div className='card_description'>1201 washaington st, Braintree, Boston, MA 01289</div>
              <div className='card_description'>(615)-324-4235</div>
            </div>
            <div>
              <div className='card_title'><Radio id='work' name='address' /><label for='work'>Work</label></div>
              <div className='card_name'>Nitesh Pathak</div>
              <div className='card_description'>1201 washaington st, Braintree, Boston, MA 01289</div>
              <div className='card_description'>(615)-324-4235</div>
            </div>
          </div>
          <div className='saved-cards'>
            <h3>Payment Details</h3>
            <div className='saved-card'><Radio id='visa' name='card' /><label for='visa'>XXXX XXXX XXXX 3456<img src={visa} /></label></div>
            <div className='saved-card'><Radio id='master' name='card' /><label for='master'>XXXX XXXX XXXX 3456<img src={master} /></label></div>
            <div className='saved-card'><Radio id='discover' name='card' /><label for='discover'>XXXX XXXX XXXX 3456<img src={discover} /></label></div>
            <div className='saved-card'><Radio id='american' name='card' /><label for='american'>XXXX XXXX XXXX 3456<img src={american} /></label></div>
            <div className='clear-fix' />
          </div>
          <div className='add_card' onClick={() => { this.addCardDlg.MDComponent.show() }}><Icon>add</Icon> Add new card</div>
          <div className='payment-footer'>
            <Button onClick={() => { location.href = '/payment-success' }} ripple raised>Pay</Button>
          </div>
        </div>
        <div>
          <Dialog ref={addCardDlg => { this.addCardDlg = addCardDlg }}>
            <Dialog.Header>Add new card</Dialog.Header>
            <Dialog.Body>
              <div>
                <Textfield label='Card number' />
              </div>
              <div className='rows'>
                <div className='col-6'>
                  <Textfield label='Valid to - mm/yy' />
                </div>
                <div className='col-6'>
                  <Textfield label='CVV' />
                </div>
              </div>
              <div>
                <Textfield label='Name on card' />
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Button ripple raised>Pay</Button>
            </Dialog.Footer>
          </Dialog>
        </div>
      </div>
    )
  }
}
