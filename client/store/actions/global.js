import { HIDE_SIDEBAR, SHOW_SIDEBAR } from '../constants'

export function hide_sidebar() {
  return {
    type: HIDE_SIDEBAR
  }
}

export function show_sidebar() {
  return {
    type: SHOW_SIDEBAR
  }
}
