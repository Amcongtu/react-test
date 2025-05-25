import { combineReducers } from '@reduxjs/toolkit'
import pagesReducer from './features/pages/pagesSlice'
import cartReducer from './features/cart/cartSlice'

const rootReducer = combineReducers({
    pages: pagesReducer,
    cart: cartReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
