import { h, Component } from 'preact'
import {Button, Icon} from 'preact-material-components'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import style from './style'

export default class Cart extends Component {
  render () {
    return (
      <div>
        <Header title='EASYPIE' />
        <div className='cart'>
          <div>
            <div className='cart-item'>
              <div className='cart-body'>
                <div className='item-name'>Boom Boom Burger [M]</div>
                <div className='item-price'>$1.99</div>
              </div>
              <div className='cart-footer'>
                <div className='cart-action'><Icon>edit</Icon><Icon>delete</Icon></div>
                <div className='cart-total'>$2.99</div>
              </div>
            </div>
            <div className='cart-item'>
              <div className='cart-body-expanded'>
                <div className='main-item'>Boom Boom Burger [M]</div>
                <div className='main-price'>$1.99</div>
                <div className='side-item'>Blue Cheese</div>
                <div className='side-price'>$0.25</div>
                <div className='side-item'>Mozarella Cheese</div>
                <div className='side-price'>$0.25</div>
                <div className='side-item'>Lettuce</div>
                <div className='side-price'>$0.25</div>
                <div className='side-item'>Piri-Piri Sauce</div>
                <div className='side-price'>$0.25</div>
              </div>
              <div className='cart-footer-expanded'>
                <div className='cart-action'><Icon>edit</Icon><Icon>delete</Icon></div>
                <div className='cart-total'>Total <span>$2.99</span></div>
              </div>
            </div>
          </div>
          <div className='charges'>
            <div className='delivery'>
              <div className='title'>Delivery charges</div>
              <div className='price'>$2.00</div>
            </div>
            <div className='sub-total'>
              <div className='title'>Discount</div>
              <div className='price'>$0.00</div>
              <div className='title'>Tax</div>
              <div className='price'>$0.18</div>
              <div className='grand-title'>Grand Total</div>
              <div className='grand-price'>$5.17</div>
            </div>
          </div>
          <div className='footer'>
            <Button ripple raised>Proceed to pay</Button>
          </div>
        </div>
      </div>
    )
  }
}
