export {setToken, isAuthenticated, getToken, logout, getProfile, setProfile }

function setToken (token) {
  localStorage.setItem('auth_token', token)
}

function isAuthenticated () {
  if (!localStorage.getItem('auth_token')) {
    return false
  }
  return true
}

function setProfile (user) {
  localStorage.setItem('name', user.name)
  localStorage.setItem('photo', user.photo)
}

function getProfile () {
  return {name: localStorage.getItem('name'), photo: localStorage.getItem('photo')}
}

function getToken () {
  return localStorage.getItem('auth_token')
}

function logout () {
  localStorage.removeItem('name')
  localStorage.removeItem('photo')
  localStorage.removeItem('auth_token')
}
