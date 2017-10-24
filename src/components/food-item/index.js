import { h, Component } from 'preact'
import {Icon, Dialog, Radio, Checkbox, Button} from 'preact-material-components'
import 'preact-material-components/Dialog/style.css'
import 'preact-material-components/Radio/style.css'
import 'preact-material-components/Checkbox/style.css'
import 'preact-material-components/Button/style.css'

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
              <Icon onClick={() => { this.customDlg.MDComponent.show(); this.rad.MDComponent.checked =true }}>add_circle_outline</Icon>
            </div>
          </div>
        </div>
        <div>
          <Dialog ref={customDlg => { this.customDlg = customDlg }}>
            <Dialog.Header>Customize</Dialog.Header>
            <Dialog.Body>
              <div class={style.sizes}>
                <h3>Size</h3>
                {this.props.sizes.map((p, index) => (
                  <div class={style.sizes_list}><Radio id={p.size} ref={r => this.rad = r} name='size' /><label for={p.size}>{p.size}<span>$ {p.price}</span></label></div>
                ))}
                <div class={style.clear_fix} />
              </div>
              <div class={style.ingredients}>
                <h3>Ingredients</h3>
                {this.props.ingredients.map((i, index) => (
                  <div class={style.ingredients_list}><Checkbox id={i.name} ref={cb => { this.cb = cb }} checked /><label for={i.name}>{i.name}</label></div>
                ))}
                <div class={style.clear_fix} />
              </div>
              <div class={style.ingredients}>
                <h3>Customization</h3>
                {this.props.customs.map((c, index) => (
                  <div class={style.ingredients_list}><Checkbox id={c.name} ref={cb => { this.cb = cb }} /><label for={c.name}>{c.name}<span>{c.price}</span></label></div>
                ))}
                <div class={style.clear_fix} />
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Button ripple raised onClick={() => { location.href = '/cart' }}><div align-start>Item total $ 2.99</div><div align-end>Order</div></Button>
            </Dialog.Footer>
          </Dialog>
        </div>
      </div>
    )
  }
}
