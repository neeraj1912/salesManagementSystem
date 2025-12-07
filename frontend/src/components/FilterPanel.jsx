import React, { useState } from 'react';

const FilterPanel = ({ options, onFilter }) => {
  // Local state for filters
  const [filters, setFilters] = useState({
    region: [],
    gender: [],
    minAge: '',
    maxAge: '',
    category: [],
    tags: [],
    paymentMethod: [],
    startDate: '',
    endDate: ''
  });

  const handleCheckboxChange = (group, value) => {
    setFilters(prev => {
      const current = prev[group];
      const newValues = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      
      const newFilters = { ...prev, [group]: newValues };
      onFilter(newFilters);
      return newFilters;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev, [name]: value };
      onFilter(newFilters);
      return newFilters;
    });
  };

  return (
    <div>
      <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem' }}>Filters</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Date Range */}
        <div className="filter-group">
            <label>Date Range</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input type="date" name="startDate" onChange={handleInputChange} />
                <input type="date" name="endDate" onChange={handleInputChange} />
            </div>
        </div>

        {/* Region */}
        <div className="filter-group">
            <label>Customer Region</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {options.regions && options.regions.map(r => (
                <label key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input 
                        type="checkbox" 
                        style={{ width: 'auto', margin: 0 }}
                        checked={filters.region.includes(r)}
                        onChange={() => handleCheckboxChange('region', r)}
                    /> {r}
                </label>
                ))}
            </div>
        </div>

        {/* Gender */}
        <div className="filter-group">
            <label>Gender</label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['Male', 'Female', 'Other'].map(g => (
                <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input 
                        type="checkbox" 
                        style={{ width: 'auto', margin: 0 }}
                        checked={filters.gender.includes(g)}
                        onChange={() => handleCheckboxChange('gender', g)}
                    /> {g}
                </label>
                ))}
            </div>
        </div>

        {/* Age Range */}
        <div className="filter-group">
            <label>Age Range</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                    type="number" 
                    name="minAge" 
                    placeholder="Min" 
                    style={{ width: '50%' }}
                    onChange={handleInputChange} 
                />
                <input 
                    type="number" 
                    name="maxAge" 
                    placeholder="Max" 
                    style={{ width: '50%' }}
                    onChange={handleInputChange} 
                />
            </div>
        </div>

        {/* Category */}
        <div className="filter-group">
            <label>Category</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {options.categories && options.categories.map(c => (
                <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input 
                        type="checkbox" 
                        style={{ width: 'auto', margin: 0 }}
                        checked={filters.category.includes(c)}
                        onChange={() => handleCheckboxChange('category', c)}
                    /> {c}
                </label>
                ))}
            </div>
        </div>

        {/* Payment Method */}
        <div className="filter-group">
            <label>Payment Method</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {options.paymentMethods && options.paymentMethods.map(p => (
                <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input 
                        type="checkbox" 
                        style={{ width: 'auto', margin: 0 }}
                        checked={filters.paymentMethod.includes(p)}
                        onChange={() => handleCheckboxChange('paymentMethod', p)}
                    /> {p}
                </label>
                ))}
            </div>
        </div>
        
        {/* Tags */}
        <div className="filter-group">
            <label>Tags</label>
            <div style={{ maxHeight: '150px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', border: '1px solid var(--border-light)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                {options.tags && options.tags.map(t => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <input 
                    type="checkbox" 
                    style={{ width: 'auto', margin: 0 }}
                    checked={filters.tags.includes(t)}
                    onChange={() => handleCheckboxChange('tags', t)}
                    /> {t}
                </label>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
