import { h, Component } from 'preact'
import {Button} from 'preact-material-components'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import FoodItem from './../../components/food-item'
import style from './style'
import burger from './../../assets/images/burger-medium.png'

import { getFoodGroupData,getFoodItemData } from './../../lib/api'

export default class Home extends Component {
  state = {groups:[],item:{foodItemList:[]}}

  getFoodData() {
    getFoodGroupData().then((groups) => {
      this.setState({ groups });
      this.getItemData(this.state.groups[0].id);
    });
  }

  getItemData(id) {
    getFoodItemData(id).then((item) => {
      this.setState({ item });
    });
  }

  componentDidMount() {
    this.getFoodData();
  }

  render ({}, { groups,item }) {
    return (
      <div>
        <Header title='EASYPIE' fav='true' />
        <div className='home'>
          <div className='tab-container'>
          <ul>
               { groups.map((group, index) => (
                <li onClick={() => { this.getItemData(group.id) }}>{group.name}</li>
                ))}
          </ul>
          </div>
          { item.foodItemList.map((item, index) => (
          <FoodItem title={item.name} desc='Cottage cheese in a jacket of mash potato, served with lettuce, tomatoes, chopped onions, mayo and crisps' price={item.price[0].price} />
          ))}
          <div className='home-footer'>
            <Button ripple raised onClick={() => { location.href = '/cart' }}><div align-start>1 Item | $2.99</div><div align-end>View Order</div><div className='clear-fix' /></Button>
          </div>
        </div>
      </div>
    )
  }
}
