import { AUTHENTICATED, LOGGED_OUT } from '../constants'

export function authenticate() {
  return {
    type: AUTHENTICATED
  }
}

export function logout() {
  return {
    type: LOGGED_OUT
  }
}
