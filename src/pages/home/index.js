import { h, Component } from 'preact'
import {Button} from 'preact-material-components'
import 'preact-material-components/Button/style.css'

import Header from './../../components/header'
import FoodItem from './../../components/food-item'
import style from './style'

import { getFoodGroupData,getFoodItemData } from './../../lib/api'

export default class Home extends Component {
  state = {active:0,groups:[],items:{foodItemList:[]}}

  getFoodData() {
    getFoodGroupData().then((groups) => {
      this.setState({ groups });
      this.getItemData(this.state.groups[0].id);
    });
  }

  getItemData(id) {
    getFoodItemData(id).then((items) => {
      this.setState({ items });
    });
  }

  componentDidMount() {
    this.getFoodData();
  }

  render ({}, { groups,items,active }) {
    return (
      <div>
        <Header title='EASYPIE' fav='true' />
        <div className='home'>
          <div className='tab-container'>
          <ul>
               { groups.map((group, index) => (
                <li className={(index==active?'active':'')} onClick={() => { this.getItemData(group.id);this.setState({active:index}) }}>{group.name}</li>
                ))}
          </ul>
          </div>
          { items.foodItemList.map((item, index) => (
          <FoodItem title={item.name+' (L)'} desc='Cottage cheese in a jacket of mash potato, served with lettuce, tomatoes, chopped onions, mayo and crisps' price={
            item.price.map((p, index) => (p.size === 'L'?p.price:''))} sizes={item.price} ingredients={item.ingredients} customs={items.customGroupList}/>
          ))}
          <div className='home-footer'>
            <Button ripple raised onClick={() => { location.href = '/cart' }}><div align-start>1 Item | $2.99</div><div align-end>View Order</div><div className='clear-fix' /></Button>
          </div>
        </div>
      </div>
    )
  }
}
