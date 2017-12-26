import { AUTHENTICATED, LOGGED_OUT } from '../constants'

const initialState = {
  user: undefined
}

export default function update(state = initialState, action) {
  if(action.type === AUTHENTICATED) {
    return {
      user: action.user
    }
  }
  else if (action.type === LOGGED_OUT) {
    return {
      user: undefined
    }
  }
  return state
}
