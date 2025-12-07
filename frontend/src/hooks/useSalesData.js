import { useState, useEffect } from 'react';
import { getSalesHelper, getOptionsHelper } from '../services/api';

export const useSalesData = () => {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({ currentPage: 1, totalPages: 1, totalItems: 0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({});
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('Date');
    const [page, setPage] = useState(1);

    const [options, setOptions] = useState({});
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const refresh = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    useEffect(() => {
        getOptionsHelper()
            .then(setOptions)
            .catch(err => console.error("Failed to load options", err));
    }, []);

    useEffect(() => {
        const fetchSales = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = {
                    search,
                    page,
                    limit: 10,
                    sortBy,
                    ...filters
                };

                // Convert array filters to comma-separated strings
                Object.keys(params).forEach(key => {
                    if (Array.isArray(params[key]) && params[key].length > 0) {
                        params[key] = params[key].join(',');
                    }
                });

                const result = await getSalesHelper(params);
                setData(result.data);
                setMeta(result.meta);
            } catch (err) {
                setError("Failed to fetch data.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const timeout = setTimeout(fetchSales, 300);
        return () => clearTimeout(timeout);
    }, [search, filters, sortBy, page, refreshTrigger]);

    return {
        data,
        meta,
        loading,
        error,
        options,
        search,
        setSearch,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        setSortBy,
        page,
        setPage,
        refresh
    };
};
