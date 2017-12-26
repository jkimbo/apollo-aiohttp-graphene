import { INCREASE, DECREASE, MULTIPLY } from '../constants'

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}

export function multiply(n) {
  return {
    type: MULTIPLY,
    amount: n
  }
}
