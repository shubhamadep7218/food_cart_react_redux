import { ADD_TO_CART, DEC_FROM_CART, REMOVE_FROM_CART } from "../actions/action"

const initialState = {
    carts : []
}

export const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            
            let itemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
            console.log(action.payload.id);
            if(itemIndex >= 0){
                state.carts[itemIndex].qnty += 1;
                return {
                    ...state,
                    carts:[...state.carts]
                }

            }else{
                const temp = {...action.payload, qnty:1}
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        
        case REMOVE_FROM_CART: 
            let data = state.carts.filter((ele)=> ele.id !== parseInt(action.payload));
            return {
                ...state,
                carts: data
            }
        
        
        case DEC_FROM_CART: 
            const itemIndex_dec = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(state.carts[itemIndex_dec].qnty >= 1){
                const delteItems = state.carts[itemIndex_dec].qnty -=1;
                return {
                    ...state,
                    carts: [...state.carts]
                }
            }else if(state.carts[itemIndex_dec].qnty === 1){
                let data = state.carts.filter((ele)=> ele.id !== parseInt(action.payload));
                return {
                    ...state,
                    carts: data
                }
            }else{
                return {
                    ...state,
                    carts: [...state.carts]
                }
            }
        
        default:
            return state;
    }
}