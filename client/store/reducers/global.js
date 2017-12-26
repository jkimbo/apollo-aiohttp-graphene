import { HIDE_SIDEBAR, SHOW_SIDEBAR } from '../constants'

const initialState = {
  sidebarVisible: false
}

export default function update(state = initialState, action) {
  if(action.type === SHOW_SIDEBAR) {
    return { sidebarVisible: true }
  }
  else if (action.type === HIDE_SIDEBAR) {
    return { sidebarVisible: false }
  }
  return state
}
