import { h, Component } from 'preact'
import { Toolbar, Icon, Drawer, List, Dialog, Button } from 'preact-material-components'
import 'preact-material-components/Toolbar/style.css'
import 'preact-material-components/Drawer/style.css'
import 'preact-material-components/List/style.css'
import 'preact-material-components/Dialog/style.css'
import 'preact-material-components/Button/style.css'

import style from './style'
import guest from './../../assets/images/guest.svg'

export default class Header extends Component {

  render (props) {
    return (
      <header>
        <Toolbar className='toolbar'>
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Icon onClick={() => {
                this.drawer.MDComponent.open = true
              }} className='material-icons menu_icon' menu>menu</Toolbar.Icon>
              <Toolbar.Title>
                {this.props.title}
              </Toolbar.Title>
            </Toolbar.Section>
            {this.props.fav ? <Toolbar.Section align-end><Toolbar.Icon className='material-icons fav_icon' menu>favorite</Toolbar.Icon></Toolbar.Section> : ''}
          </Toolbar.Row>
        </Toolbar>
        <Drawer.TemporaryDrawer ref={drawer => { this.drawer = drawer }} >
          <Drawer.TemporaryDrawerHeader className='mdc-theme--primary-bg'>
            <a class={style.login_link} onClick={() => { this.loginDlg.MDComponent.show() }}>
              <img class={style.guest} src={guest} /> <span class={style.guest_login}>LOGIN</span>
            </a>
          </Drawer.TemporaryDrawerHeader>
          <Drawer.TemporaryDrawerContent>
            <List>
              <List.LinkItem href='/'>
                FOOD MENU
              </List.LinkItem>
              <List.LinkItem href='/my-favs'>
                MY FAVS
              </List.LinkItem>
              <List.LinkItem href='/about-us'>
                ABOUT US
              </List.LinkItem>
              <List.LinkItem href='/contact-us'>
                CONTACT US
              </List.LinkItem>
            </List>
          </Drawer.TemporaryDrawerContent>
        </Drawer.TemporaryDrawer>
        <div>
          <Dialog ref={loginDlg => { this.loginDlg = loginDlg }}>
            <Dialog.Header>Sign In</Dialog.Header>
            <Dialog.Body>
              <p className='facebook'><Button onClick={() => { location.href = '/profile' }}>Sign in with Facebook</Button></p>
              <p>OR</p>
              <p className='google'><Button onClick={() => { location.href = '/profile' }}>Sign in with Google</Button></p>
            </Dialog.Body>
          </Dialog>
        </div>
      </header>
    )
  }
}
