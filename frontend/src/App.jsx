import React from 'react';
import './App.css';
import { useSalesData } from './hooks/useSalesData';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import SortDropdown from './components/SortDropdown';
import SalesTable from './components/SalesTable';
import Pagination from './components/Pagination';

function App() {
  const {
      data,
      meta,
      loading,
      error,
      options,
      search,
      setSearch,
      filters, // not setFilters directly, but we need a handler
      setFilters,
      sortBy, // not setSortBy directly
      setSortBy,
      page, // not setPage directly
      setPage
  } = useSalesData();

  const handleSearch = (term) => {
    setSearch(term);
    setPage(1);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleSort = (sortField) => {
    setSortBy(sortField);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="layout">
      <header className="app-header">
        <h1>TruEstate Sales</h1>
        <p className="subtitle">Manage and analyze your retail sales data</p>
      </header>
      
      <main className="main-content">
        <aside className="filters-sidebar">
             <FilterPanel options={options} onFilter={handleFilter} />
        </aside>

        <section className="data-section">
            <div className="top-bar">
                <div className="search-wrapper">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className="sort-wrapper">
                    <SortDropdown onSort={handleSort} />
                </div>
            </div>

            {error && <div className="state-message" style={{ color: '#ef4444' }}>{error}</div>}
            
            {loading ? (
                <div className="state-message">Loading data...</div>
            ) : (
                <>
                    <SalesTable data={data} />
                    <Pagination meta={meta} onPageChange={handlePageChange} />
                </>
            )}
        </section>
      </main>
    </div>
  );
}

export default App;
