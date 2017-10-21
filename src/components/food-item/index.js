import { h, Component } from 'preact'
import {Icon, Dialog, Radio, Checkbox, Button} from 'preact-material-components'
import 'preact-material-components/Icon/style.css'
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
              <Icon onClick={() => { this.customDlg.MDComponent.show() }}>add_circle_outline</Icon>
            </div>
          </div>
        </div>
        <div>
          <Dialog ref={customDlg => { this.customDlg = customDlg }}>
            <Dialog.Header>Customize</Dialog.Header>
            <Dialog.Body>
              <div class={style.sizes}>
                <h3>Size</h3>
                <div class={style.sizes_list}><Radio id='small' name='size' /><label for='small'>Small<span>$ 0.50</span></label></div>
                <div class={style.sizes_list}><Radio id='medium' name='size' /><label for='medium'>Medium<span>$ 0.60</span></label></div>
                <div class={style.sizes_list}><Radio id='large' name='size' /><label for='large'>Large<span>$ 0.70</span></label></div>
                <div class={style.clear_fix} />
              </div>
              <div class={style.ingredients}>
                <h3>Ingredients</h3>
                <div class={style.ingredients_list}><Checkbox id='chicken' ref={cb => { this.cb = cb }} /><label for='chicken'>Chicken<span>$ 0.70</span></label></div>
                <div class={style.ingredients_list}><Checkbox id='cheese' ref={cb => { this.cb = cb }} /><label for='cheese'>Cheese<span>$ 0.30</span></label></div>
                <div class={style.ingredients_list}><Checkbox id='lettuce' ref={cb => { this.cb = cb }} /><label for='lettuce'>Lettuce<span>$ 0.20</span></label></div>
                <div class={style.ingredients_list}><Checkbox id='mayonese' ref={cb => { this.cb = cb }} /><label for='mayonese'>Mayonese<span>$ 0.10</span></label></div>
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
