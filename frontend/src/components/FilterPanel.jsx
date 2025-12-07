// import React, { useState } from 'react';

// const FilterPanel = ({ options, onFilter }) => {
//   // Local state for filters
//   const [filters, setFilters] = useState({
//     region: [],
//     gender: [],
//     minAge: '',
//     maxAge: '',
//     category: [],
//     tags: [],
//     paymentMethod: [],
//     startDate: '',
//     endDate: ''
//   });

//   const handleCheckboxChange = (group, value) => {
//     setFilters(prev => {
//       const current = prev[group];
//       const newValues = current.includes(value)
//         ? current.filter(v => v !== value)
//         : [...current, value];
      
//       const newFilters = { ...prev, [group]: newValues };
//       onFilter(newFilters);
//       return newFilters;
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prev => {
//       const newFilters = { ...prev, [name]: value };
//       onFilter(newFilters);
//       return newFilters;
//     });
//   };

//   return (
//     <div>
//       <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem' }}>Filters</h3>
      
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//         {/* Date Range */}
//         <div className="filter-group">
//             <label>Date Range</label>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                 <input type="date" name="startDate" onChange={handleInputChange} />
//                 <input type="date" name="endDate" onChange={handleInputChange} />
//             </div>
//         </div>

//         {/* Region */}
//         <div className="filter-group">
//             <label>Customer Region</label>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                 {options.regions && options.regions.map(r => (
//                 <label key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
//                     <input 
//                         type="checkbox" 
//                         style={{ width: 'auto', margin: 0 }}
//                         checked={filters.region.includes(r)}
//                         onChange={() => handleCheckboxChange('region', r)}
//                     /> {r}
//                 </label>
//                 ))}
//             </div>
//         </div>

//         {/* Gender */}
//         <div className="filter-group">
//             <label>Gender</label>
//             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//                 {['Male', 'Female', 'Other'].map(g => (
//                 <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
//                     <input 
//                         type="checkbox" 
//                         style={{ width: 'auto', margin: 0 }}
//                         checked={filters.gender.includes(g)}
//                         onChange={() => handleCheckboxChange('gender', g)}
//                     /> {g}
//                 </label>
//                 ))}
//             </div>
//         </div>

//         {/* Age Range */}
//         <div className="filter-group">
//             <label>Age Range</label>
//             <div style={{ display: 'flex', gap: '0.5rem' }}>
//                 <input 
//                     type="number" 
//                     name="minAge" 
//                     placeholder="Min" 
//                     style={{ width: '50%' }}
//                     onChange={handleInputChange} 
//                 />
//                 <input 
//                     type="number" 
//                     name="maxAge" 
//                     placeholder="Max" 
//                     style={{ width: '50%' }}
//                     onChange={handleInputChange} 
//                 />
//             </div>
//         </div>

//         {/* Category */}
//         <div className="filter-group">
//             <label>Category</label>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                 {options.categories && options.categories.map(c => (
//                 <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
//                     <input 
//                         type="checkbox" 
//                         style={{ width: 'auto', margin: 0 }}
//                         checked={filters.category.includes(c)}
//                         onChange={() => handleCheckboxChange('category', c)}
//                     /> {c}
//                 </label>
//                 ))}
//             </div>
//         </div>

//         {/* Payment Method */}
//         <div className="filter-group">
//             <label>Payment Method</label>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                 {options.paymentMethods && options.paymentMethods.map(p => (
//                 <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
//                     <input 
//                         type="checkbox" 
//                         style={{ width: 'auto', margin: 0 }}
//                         checked={filters.paymentMethod.includes(p)}
//                         onChange={() => handleCheckboxChange('paymentMethod', p)}
//                     /> {p}
//                 </label>
//                 ))}
//             </div>
//         </div>
        
//         {/* Tags */}
//         <div className="filter-group">
//             <label>Tags</label>
//             <div style={{ maxHeight: '150px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', border: '1px solid var(--border-light)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
//                 {options.tags && options.tags.map(t => (
//                 <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal', fontSize: '0.9rem', cursor: 'pointer' }}>
//                     <input 
//                     type="checkbox" 
//                     style={{ width: 'auto', margin: 0 }}
//                     checked={filters.tags.includes(t)}
//                     onChange={() => handleCheckboxChange('tags', t)}
//                     /> {t}
//                 </label>
//                 ))}
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterPanel;

import React, { useState } from 'react';
import './FilterPanel.css';

const FilterPanel = ({ options, onFilter }) => {
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

  const [isExpanded, setIsExpanded] = useState({
    date: false,
    region: false,
    gender: false,
    age: false,
    category: false,
    payment: false,
    tags: false
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

  const clearAllFilters = () => {
    const clearedFilters = {
      region: [],
      gender: [],
      minAge: '',
      maxAge: '',
      category: [],
      tags: [],
      paymentMethod: [],
      startDate: '',
      endDate: ''
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.region.length) count += filters.region.length;
    if (filters.gender.length) count += filters.gender.length;
    if (filters.category.length) count += filters.category.length;
    if (filters.tags.length) count += filters.tags.length;
    if (filters.paymentMethod.length) count += filters.paymentMethod.length;
    if (filters.minAge || filters.maxAge) count += 1;
    if (filters.startDate || filters.endDate) count += 1;
    return count;
  };

  const toggleSection = (section) => {
    setIsExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const activeCount = getActiveFilterCount();

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <div className="filter-title-wrapper">
          <h3>Filters</h3>
          {activeCount > 0 && (
            <span className="filter-badge">{activeCount}</span>
          )}
        </div>
        {activeCount > 0 && (
          <button className="clear-btn" onClick={clearAllFilters}>
            Clear All
          </button>
        )}
      </div>
      
      <div className="filter-sections">
        {/* Date Range */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('date')}>
            <span className="section-title">📅 Date Range</span>
            <span className={`expand-icon ${isExpanded.date ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.date && (
            <div className="section-content">
              <div className="date-inputs">
                <input 
                  type="date" 
                  name="startDate" 
                  value={filters.startDate}
                  onChange={handleInputChange}
                  placeholder="Start Date"
                />
                <input 
                  type="date" 
                  name="endDate" 
                  value={filters.endDate}
                  onChange={handleInputChange}
                  placeholder="End Date"
                />
              </div>
            </div>
          )}
        </div>

        {/* Region */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('region')}>
            <span className="section-title">🌍 Customer Region</span>
            <span className={`expand-icon ${isExpanded.region ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.region && (
            <div className="section-content">
              {options.regions && options.regions.map(r => (
                <label key={r} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={filters.region.includes(r)}
                    onChange={() => handleCheckboxChange('region', r)}
                  />
                  <span>{r}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Gender */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('gender')}>
            <span className="section-title">👤 Gender</span>
            <span className={`expand-icon ${isExpanded.gender ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.gender && (
            <div className="section-content gender-content">
              {['Male', 'Female', 'Other'].map(g => (
                <label key={g} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={filters.gender.includes(g)}
                    onChange={() => handleCheckboxChange('gender', g)}
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Age Range */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('age')}>
            <span className="section-title">🎂 Age Range</span>
            <span className={`expand-icon ${isExpanded.age ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.age && (
            <div className="section-content">
              <div className="age-inputs">
                <input 
                  type="number" 
                  name="minAge" 
                  placeholder="Min" 
                  value={filters.minAge}
                  onChange={handleInputChange}
                />
                <span className="age-separator">-</span>
                <input 
                  type="number" 
                  name="maxAge" 
                  placeholder="Max"
                  value={filters.maxAge}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
        </div>

        {/* Category */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('category')}>
            <span className="section-title">📦 Category</span>
            <span className={`expand-icon ${isExpanded.category ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.category && (
            <div className="section-content">
              {options.categories && options.categories.map(c => (
                <label key={c} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={filters.category.includes(c)}
                    onChange={() => handleCheckboxChange('category', c)}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('payment')}>
            <span className="section-title">💳 Payment Method</span>
            <span className={`expand-icon ${isExpanded.payment ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.payment && (
            <div className="section-content">
              {options.paymentMethods && options.paymentMethods.map(p => (
                <label key={p} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={filters.paymentMethod.includes(p)}
                    onChange={() => handleCheckboxChange('paymentMethod', p)}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        
        {/* Tags */}
        <div className="filter-section">
          <div className="section-header" onClick={() => toggleSection('tags')}>
            <span className="section-title">🏷️ Tags</span>
            <span className={`expand-icon ${isExpanded.tags ? 'expanded' : ''}`}>▼</span>
          </div>
          {isExpanded.tags && (
            <div className="section-content scrollable-content">
              {options.tags && options.tags.map(t => (
                <label key={t} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={filters.tags.includes(t)}
                    onChange={() => handleCheckboxChange('tags', t)}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;