import { h, Component } from 'preact'
import { Toolbar, Icon, Drawer, List, Dialog } from 'preact-material-components'
import 'preact-material-components/Toolbar/style.css'
import 'preact-material-components/Icon/style.css'
import 'preact-material-components/Drawer/style.css'
import 'preact-material-components/List/style.css'
import 'preact-material-components/Dialog/style.css'

import style from './style'
import guest from './../../assets/images/guest.svg'

import SocialButton from './../../components/social-button'
import { googleLogin, facebookLogin } from './../../lib/api'
import { setToken, isAuthenticated, logout, setProfile, getProfile } from './../../lib/auth'

export default class Header extends Component {

  render (props) {
    const handleGoogleLogin = (user) => {
      googleLogin(user._token).then((response) => {
        if (response.status) {
          setToken(response.token)
          setProfile(response.user)
          location.reload()
        }
      })
    }

    const handleGoogleLoginFailure = (err) => {
      console.error(err)
    }

    const handleFacebookLogin = (user) => {
      facebookLogin(user._token).then((response) => {
        if (response.status) {
          setToken(response.token)
          setProfile(response.user)
          location.reload()
        }
      })
    }

    const handleFacebookLoginFailure = (err) => {
      console.error(err)
    }
    let profile = null
    let logout_elm = null
    if (isAuthenticated()) {
      profile = <a class={style.login_link} href='/profile'><img class={style.logged_in_user} src={getProfile().photo} /> <span class={style.guest_login}>{getProfile().name}</span></a>
      logout_elm = <List.LinkItem onClick={() => { logout(); location.href = '/' }}>LOGOUT</List.LinkItem>
    } else {
      profile = <a class={style.login_link} onClick={() => { this.loginDlg.MDComponent.show() }}>
        <img class={style.guest} src={guest} /> <span class={style.guest_login}>LOGIN</span>
      </a>
    }

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
            {profile}
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
              {logout_elm}
            </List>
          </Drawer.TemporaryDrawerContent>
        </Drawer.TemporaryDrawer>
        <div>
          <Dialog ref={loginDlg => { this.loginDlg = loginDlg }}>
            <Dialog.Header>Sign In</Dialog.Header>
            <Dialog.Body>
              <p className='facebook'><SocialButton provider='facebook' appId='1539310786111844' onLoginSuccess={handleFacebookLogin} onLoginFailure={handleFacebookLoginFailure}>Sign in with Facebook</SocialButton></p>
              <p>OR</p>
              <p className='google'><SocialButton provider='google' appId='376909576438-clqo2ro9cmstlemn5kmkpc0muvf8m4aa.apps.googleusercontent.com' onLoginSuccess={handleGoogleLogin} onLoginFailure={handleGoogleLoginFailure}>Sign in with Google</SocialButton></p>
            </Dialog.Body>
          </Dialog>
        </div>
      </header>
    )
  }
}
