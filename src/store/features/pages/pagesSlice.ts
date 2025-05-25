import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ViewMode = 'grid' | 'list'
export type SortOption = 'best-match' | 'price-low' | 'price-high'

interface FilterState {
    perPage: number
    sortBy: SortOption
    view: ViewMode
    search: string
}

const initialState: FilterState = {
    perPage: 8,
    sortBy: 'best-match',
    view: 'grid',
    search: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPerPage(state, action: PayloadAction<number>) {
            state.perPage = action.payload
        },
        setSortBy(state, action: PayloadAction<SortOption>) {
            state.sortBy = action.payload
        },
        setView(state, action: PayloadAction<ViewMode>) {
            state.view = action.payload
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
    },
})

export const { setPerPage, setSortBy, setView, setSearch } = filterSlice.actions
export default filterSlice.reducer
