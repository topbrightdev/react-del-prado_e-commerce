import {
    ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "../constants/ActionTypes";


export default function wishlistReducer(state = {
    list: []
}, action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const productId = action.product.id
            if (state.list.findIndex(product => product.id === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product }) 
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, list }
            }

            return { ...state, list: [...state.list, action.product] }

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}
