import { h, Component } from 'preact'
import {Icon, Tabs, Switch, Dialog, Textfield, Button} from 'preact-material-components'
import 'preact-material-components/Tabs/style.css'
import 'preact-material-components/Switch/style.css'
import 'preact-material-components/Dialog/style.css'
import 'preact-material-components/Textfield/style.css'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import Address from './../../components/address'
import guest from './../../assets/images/guest.svg'
import add from './../../assets/images/add.svg'
import visa from './../../assets/images/visa.png'
import master from './../../assets/images/master.png'
import discover from './../../assets/images/discover.png'
import american from './../../assets/images/american.png'
import style from './style'

export default class Profile extends Component {
state = { activeTab: 0 }
  render ({},{activeTab}) {
    let body = null
    if (activeTab === 0) {
      body = <div>
        <Address type='Home' name='Nitesh Pathak' address='1201 washaington st, Braintree, Boston, MA 01289' mobile='(615)-324-4235' />
        <Address type='Work' name='Nitesh Pathak' address='1201 washaington st, Braintree, Boston, MA 01289' mobile='(615)-324-4235' />
        <div className='add_address' onClick={() => { this.addressDlg.MDComponent.show() }}><Icon>add</Icon> Add new address</div>
        <div>
          <Dialog ref={addressDlg => { this.addressDlg = addressDlg }}>
            <Dialog.Header>Add Address</Dialog.Header>
            <Dialog.Body>
              <div>
                <Textfield label="Name"/>
              </div>
              <div>
              <Textfield label="Address line 1"/>
              </div>
              <div>
              <Textfield label="Address line 2"/>
              </div>
              <div>
              <Textfield label="City"/>
              </div>
              <div>
              <Textfield label="State"/>
              </div>
              <div>
              <Textfield label="Zip code"/>
              </div>
              <div>
              <Textfield label="Phone number"/>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Button ripple raised>Save</Button>
            </Dialog.Footer>
          </Dialog>
        </div>
      </div>
    } else if (activeTab === 1) {
      body = <div>
        <div className='saved-card'>XXXX XXXX XXXX 3456<img src={visa} /></div>
        <div className='saved-card'>XXXX XXXX XXXX 3456<img src={master} /></div>
        <div className='saved-card'>XXXX XXXX XXXX 3456<img src={discover} /></div>
        <div className='saved-card'>XXXX XXXX XXXX 3456<img src={american} /></div>
        <div className='clear-fix' />
      </div>
    } else if (activeTab === 2) {
      body = <div>
        <div className='order-history'>
          <div className='order-header'>
            <div className='order-id'>0987-SEP-17</div>
            <div className='order-price'>$2.99</div>
          </div>
          <div className='order-body'>
            <div className='order-date'>09/15/2017</div>
            <div className='order-time'>2:00 PM</div>
          </div>
          <div className='order-footer'>
            <div className='order-status'>Delivered</div>
            <div className='order-time'>2:46 PM</div>
          </div>
        </div>
        <div className='order-history'>
          <div className='order-header'>
            <div className='order-id'>0987-SEP-17</div>
            <div className='order-price'>$2.99</div>
          </div>
          <div className='order-body'>
            <div className='order-date'>09/15/2017</div>
            <div className='order-time'>2:00 PM</div>
          </div>
          <div className='order-footer'>
            <div className='order-status'>Delivered</div>
            <div className='order-time'>2:46 PM</div>
          </div>
        </div>
        <div className='order-history'>
          <div className='order-header-expanded'>
            <div className='order-id'>0987-SEP-17</div>
            <div className='order-status'>Delivered</div>
            <div className='order-date'>09/15/2017</div>
            <div className='order-time'>2:00 PM</div>
          </div>
          <div className='order-body-expanded'>
          <div className='order-main-item'>Boom Boom Burger [M]</div>
          <div className='order-main-price'>$1.99</div>
            <div className='order-side-item'>Blue Cheese</div>
            <div className='order-side-price'>$0.25</div>
            <div className='order-side-item'>MOzarella Cheese</div>
            <div className='order-side-price'>$0.25</div>
            <div className='order-side-item'>Lettuce Cheese</div>
            <div className='order-side-price'>$0.25</div>
            <div className='order-side-item'>Piri-Piri Suace</div>
            <div className='order-side-price'>$0.25</div>
          </div>
          <div className='order-footer-expanded'>
            <div className='order-total'>Total</div>
            <div className='order-price'>$2.99</div>
          </div>
        </div>
        <div className='clear-fix' />
      </div>
    } else if (activeTab === 3) {
      body = <div>
        <div className='notification-card'>Order Updates<Switch /></div>
        <div className='notification-card'>Offer Updates<Switch /></div>
        <div className='clear-fix' />
      </div>
    }
    return (
      <div>
        <Header title='Profile' />
        <div className='profile'>
          <div className='img_cont'>
            <div className='profile_pic'>
              <img src={guest} />
              <img className='add_btn' src={add} />
            </div>
            <div className='name'>Nitesh Pathak</div>
            <div className='city'>Braintree, MA</div>
          </div>
          <div className='profile-tab'>
          <Tabs.TabBarScroller>
            <Tabs scroller>
              <Tabs.Tab active onClick={() => { this.setState({activeTab: 0}) }}>Address</Tabs.Tab>
              <Tabs.Tab onClick={() => { this.setState({activeTab: 1}) }}>Saved cards</Tabs.Tab>
              <Tabs.Tab onClick={() => { this.setState({activeTab: 2}) }}>Order History</Tabs.Tab>
              <Tabs.Tab onClick={() => { this.setState({activeTab: 3}) }}>Notification</Tabs.Tab>
            </Tabs>
            </Tabs.TabBarScroller>
          </div>
          {body}
        </div>
      </div>
    )
  }
}
