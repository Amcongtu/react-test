import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
    SortOptions,
    ViewModes,
    type SortOption,
    type ViewMode,
} from './page.enum';

interface FilterState {
    perPage: number;
    sortBy: SortOption;
    view: ViewMode;
    search: string;
    currentPage: number;
}

const initialState: FilterState = {
    perPage: 8,
    currentPage: 1,
    sortBy: SortOptions.BestMatch,
    view: ViewModes.Grid,
    search: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPerPage(state, action: PayloadAction<number>) {
            state.perPage = action.payload;
        },
        setSortBy(state, action: PayloadAction<SortOption>) {
            state.sortBy = action.payload;
        },
        setView(state, action: PayloadAction<ViewMode>) {
            state.view = action.payload;
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    },
});

export const { setPerPage, setSortBy, setView, setSearch, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
