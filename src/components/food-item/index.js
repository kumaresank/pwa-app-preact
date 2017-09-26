import { h, Component } from 'preact'
import Icon from 'preact-material-components/Icon'
import style from './style'

export default class FoodItem extends Component {

  render (props) {
    return (
      <div>
        <div class={style.card}>
          <div class={style.card_title}>{this.props.title}
            <div class={style.right_icons}>
              <Icon>share</Icon>
              <Icon>favorite_border</Icon>
            </div>
          </div>
          <div class={style.card_description}>{this.props.desc}</div>
          <div class={style.card_footer}>$ {this.props.price}
            <div class={style.cart_icons}>
              <Icon>remove_circle_outline</Icon>
              <span>0</span>
              <Icon>add_circle_outline</Icon>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
