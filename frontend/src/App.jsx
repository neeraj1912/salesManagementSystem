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
        sortBy,
        setSortBy,
        page, // not setPage directly
        setPage,
        refresh
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
      <header className="app-header-glass">
        <div className="header-container">
          <div className="brand-section">
            <div className="brand-icon">
              <span>🏢</span>
            </div>
            <div>
              <h1>TruEstate Sales</h1>
              <p className="tagline">Smart Sales Analytics</p>
            </div>
          </div>
          
          <div className="header-center">
            <div className="header-stats-group">
              <div className="header-stat-item">
                <span className="stat-label">Total Revenue</span>
                <span className="stat-value revenue-value">
                  ${(meta.totalRevenue || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="header-stat-divider"></div>
              <div className="header-stat-item">
                <span className="stat-label">Records</span>
                <span className="stat-value">{meta.totalItems || 0}</span>
              </div>
            </div>
          </div>
          
          <div className="header-actions-group">
             <div className="page-info">
                Page {meta.currentPage || 1} of {meta.totalPages || 1}
             </div>
             <button className="refresh-btn" onClick={refresh} title="Refresh Data">
                🔄
             </button>
          </div>
          
          <div className="user-section">
            <div className="notification-icon" onClick={() => alert('Notifications clicked! 🔔')}>🔔</div>
            <div className="user-avatar" onClick={() => alert('User profile clicked! 👤')}>👤</div>
          </div>
        </div>
      </header>
        
        <main className="main-content">
          <aside className="filters-sidebar">
              <FilterPanel options={options} onFilter={handleFilter} />
          </aside>

          <section className="data-section">
              <div className="top-bar">
                  <div className="search-wrapper">
                      <SearchBar onSearch={handleSearch} value={search} />
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
