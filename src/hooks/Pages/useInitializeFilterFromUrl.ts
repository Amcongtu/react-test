import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SortOptions, ViewModes, type SortOption, type ViewMode } from '../../store/features/pages/page.enum';
import { setCurrentPage, setPerPage, setSearch, setSortBy, setView } from '../../store/features/pages/pagesSlice';

export function useInitializeFilterFromUrl() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const perPage = parseInt(params.get('perPage') || '', 10);
        const currentPage = parseInt(params.get('currentPage') || '', 10);
        const sortBy = params.get('sortBy');
        const view = params.get('view');
        const search = params.get('search');

        if (!isNaN(perPage)) dispatch(setPerPage(perPage));
        if (!isNaN(currentPage)) dispatch(setCurrentPage(currentPage));
        if (sortBy && Object.values(SortOptions).includes(sortBy as SortOption)) {
            dispatch(setSortBy(sortBy as SortOption));
        }
        if (view && Object.values(ViewModes).includes(view as ViewMode)) {
            dispatch(setView(view as ViewMode));
        }
        if (search !== null) dispatch(setSearch(search));
    }, [location.search, dispatch]);
}
