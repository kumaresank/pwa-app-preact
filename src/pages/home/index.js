import { h, Component } from 'preact'
import {Button, Tabs} from 'preact-material-components'
import 'preact-material-components/Tabs/style.css'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import FoodItem from './../../components/food-item'
import style from './style'
import burger from './../../assets/images/burger-medium.png'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Header title='EASYPIE' fav='true' />
        <div className='home'>
          <img className='group_img' src={burger} />
          <div className='tab-container'>
            <Tabs.TabBarScroller>
              <Tabs scroller>
                <Tabs.Tab active>Burgers</Tabs.Tab>
                <Tabs.Tab>Salad</Tabs.Tab>
                <Tabs.Tab>Sandwiches</Tabs.Tab>
                <Tabs.Tab>Signature</Tabs.Tab>
                <Tabs.Tab>Salad</Tabs.Tab>
                <Tabs.Tab>Sandwiches</Tabs.Tab>
                <Tabs.Tab>Signature</Tabs.Tab>
              </Tabs>
            </Tabs.TabBarScroller>
          </div>
          <FoodItem title='Boom Boom Burger (Medium)' desc='House made Meat loaf, Mild Cheddar, Fried Onion Strings' price='2.99' />
          <div className='footer'>
            <Button ripple raised onClick={() => { location.href = '/cart' }}><div align-start>1 Item | $2.99</div><div align-end>View Order</div><div className='clear-fix' /></Button>
          </div>
        </div>
      </div>
    )
  }
}
