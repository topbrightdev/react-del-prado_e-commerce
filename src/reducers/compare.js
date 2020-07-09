import {
    ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "../constants/ActionTypes";


export default function compareReducer(state = {
    items: []
}, action) {
    switch (action.type) {
        case ADD_TO_COMPARE:
            const productId = action.product.id
            if (state.items.findIndex(product => product.id === productId) !== -1) {
                const items = state.items.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product }) 
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, items }
            }

            return { ...state, items: [...state.items, action.product] }

        case REMOVE_FROM_COMPARE:
            return {
                items: state.items.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}
