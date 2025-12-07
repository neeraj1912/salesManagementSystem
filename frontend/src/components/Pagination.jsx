import React from 'react';

const Pagination = ({ meta, onPageChange }) => {
  const { currentPage, totalPages, totalItems } = meta;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
        style={{ background: currentPage === 1 ? 'transparent' : undefined, border: '1px solid var(--border-light)', color: currentPage === 1 ? 'var(--text-secondary)' : undefined }}
      >
        Previous
      </button>
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Page <strong style={{ color: 'var(--text-main)' }}>{currentPage}</strong> of {totalPages}
      </span>
      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
        style={{ background: currentPage === totalPages ? 'transparent' : undefined, border: '1px solid var(--border-light)', color: currentPage === totalPages ? 'var(--text-secondary)' : undefined }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
