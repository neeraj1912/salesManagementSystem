// import React from 'react';

// const Pagination = ({ meta, onPageChange }) => {
//   const { currentPage, totalPages, totalItems } = meta;

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
//       <button 
//         disabled={currentPage === 1} 
//         onClick={() => onPageChange(currentPage - 1)}
//         style={{ background: currentPage === 1 ? 'transparent' : undefined, border: '1px solid var(--border-light)', color: currentPage === 1 ? 'var(--text-secondary)' : undefined }}
//       >
//         Previous
//       </button>
//       <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
//         Page <strong style={{ color: 'var(--text-main)' }}>{currentPage}</strong> of {totalPages}
//       </span>
//       <button 
//         disabled={currentPage === totalPages} 
//         onClick={() => onPageChange(currentPage + 1)}
//         style={{ background: currentPage === totalPages ? 'transparent' : undefined, border: '1px solid var(--border-light)', color: currentPage === totalPages ? 'var(--text-secondary)' : undefined }}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;


import React from 'react';
import './Pagination.css';

const Pagination = ({ meta, onPageChange }) => {
  const { currentPage, totalPages, totalItems } = meta;

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        <span className="pagination-divider">•</span>
        <strong>{totalItems}</strong> total items
      </div>
      
      <div className="pagination-controls">
        <button 
          disabled={currentPage === 1} 
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination-btn"
        >
          ← Previous
        </button>
        
        <div className="page-numbers">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
        
        <button 
          disabled={currentPage === totalPages} 
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination-btn"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Pagination;