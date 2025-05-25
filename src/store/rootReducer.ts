import { combineReducers } from '@reduxjs/toolkit'
import pagesReducer from './features/pages/pagesSlice'

const rootReducer = combineReducers({
    pages: pagesReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
