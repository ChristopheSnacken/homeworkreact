export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CHOOSE_TOPPINGS = 'CHOOSE_TOPPINGS'
export const CHOOSE_DRONE = 'CHOOSE_DRONE'



export const chooseBase = ( base ) => {
  return {
    type: CHOOSE_BASE,
    payload: base
  }
}

export const chooseSauce = ( sauce ) => {
    return {
      type: CHOOSE_SAUCE,
      payload: sauce
    }
  }

  export const chooseToppings = ( toppings ) => {
    return {
      type: CHOOSE_TOPPINGS,
      payload: toppings
    }
  }

  export const chooseDrone = (drone) => {
  return {
    type: CHOOSE_DRONE,
    payload: drone
  }
}
