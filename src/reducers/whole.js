
import { CHOOSE_BASE, CHOOSE_SAUCE, CHOOSE_TOPPINGS, CHOOSE_DRONE } from '../actions'

export default function(state, { type, payload }) {
  switch (type) {
    case CHOOSE_BASE:
      return { ...state, base: payload }
    case CHOOSE_SAUCE:
      return { ...state, sauce: payload }
    case CHOOSE_TOPPINGS:
      return { ...state, toppings: payload }
    case CHOOSE_DRONE:
      return { ...state, drone: payload }
    default:
      return {
        base: {
          name: 'Choose a base',
          price: 0
        },
        sauce: {
          name: 'Choose a sauce',
          price: 0.0
        },
        toppings: [],
        drone: false
      }
  }
}
