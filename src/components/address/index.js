import { h, Component } from 'preact'
import Icon from 'preact-material-components/Icon'
import style from './style'

export default class Address extends Component {

  render (props) {
    return (
      <div>
        <div class={style.card}>
          <div class={style.card_title}>{this.props.type}
            <div class={style.right_icons}>
              <Icon>edit</Icon>
            </div>
          </div>
          <div class={style.card_name}>{this.props.name}</div>
          <div class={style.card_description}>{this.props.address}</div>
          <div class={style.card_description}>{this.props.mobile}</div>
        </div>
      </div>
    )
  }
}
