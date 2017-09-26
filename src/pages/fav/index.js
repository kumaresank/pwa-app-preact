import { h, Component } from 'preact'
import Button from 'preact-material-components/Button'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import FoodItem from './../../components/food-item'
import style from './style'

export default class Fav extends Component {
  render () {
    return (
      <div>
        <Header title='My Favs' />
        <div className='fav'>
          <FoodItem title='Boom Boom Burger (Medium)' desc='House made Meat loaf, Mild Cheddar, Fried Onion Strings' price='2.99' />
          <FoodItem title='Boom Boom Burger (Medium)' desc='House made Meat loaf, Mild Cheddar, Fried Onion Strings' price='2.99' />
          <FoodItem title='Boom Boom Burger (Medium)' desc='House made Meat loaf, Mild Cheddar, Fried Onion Strings' price='2.99' />
          <div className='footer'>
            <Button ripple raised><div align-start>1 Item | $2.99</div><div align-end>View Order</div><div className='clear-fix' /></Button>
          </div>
        </div>
      </div>
    )
  }
}
