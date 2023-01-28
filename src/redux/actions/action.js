export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DEC_FROM_CART = "DEC_FROM_CART";

export const ADD = (item) => {
    return {
        type: ADD_TO_CART,
        payload:item
    }
}

export const DELETE = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload:id
    }
}

export const DECREASE = (item) => {
    return {
        type: DEC_FROM_CART,
        payload:item
    }
}