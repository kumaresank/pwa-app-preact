import { h, Component } from 'preact'

import Header from './../../components/header'
import style from './style'
import logo from './../../assets/images/logo.png'

export default class About extends Component {
  render () {
    return (
      <div>
        <Header title='About Us' />
        <div className='about'>
          <div className='logo-container'>
            <img src={logo} />
          </div>
          <h3>EasyPie Restaurant</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
          <span className='footer'>Copyright © 2017 by Easy Pie Restaurants</span>
        </div>
      </div>
    )
  }
}
