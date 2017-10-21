import { h, Component } from 'preact'
import SocialLogin from 'react-social-login'
import Button from 'preact-material-components/Button'
import 'preact-material-components/Button/style.css'

const button = ({ children, triggerLogin, ...props }) => (
  <Button onClick={triggerLogin} {...props}>
    { children }
  </Button>
)

export default SocialLogin(button)
