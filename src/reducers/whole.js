
import { CHOOSE_BASE, CHOOSE_SAUCE, CHOOSE_TOPPINGS, CHOOSE_DRONE } from '../actions'

export default function(state, action) {
  switch (action.type) {
    case CHOOSE_BASE:
      return { ...state, base: action.payload }
    case CHOOSE_SAUCE:
      return { ...state, sauce: action.payload }
    case CHOOSE_TOPPINGS:
      return { ...state, toppings: action.payload }
    case CHOOSE_DRONE:
      return { ...state, drone: action.payload }
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
