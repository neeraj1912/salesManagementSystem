import React from 'react';

const SalesTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>No results found.</div>;
  }

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Region</th>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ whiteSpace: 'nowrap', color: 'var(--text-secondary)' }}>
                {new Date(item.Date).toLocaleDateString()}
              </td>
              <td>
                <div style={{ fontWeight: 500 }}>{item['Customer Name']}</div>
                <small style={{ color: 'var(--text-secondary)' }}>{item['Phone Number']}</small>
              </td>
              <td>{item['Customer Region']}</td>
              <td style={{ fontWeight: 500 }}>{item['Product Name']}</td>
              <td>
                <span style={{ 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '20px', 
                    background: '#f1f5f9', 
                    fontSize: '0.85rem' 
                }}>
                    {item['Product Category']}
                </span>
              </td>
              <td style={{ textAlign: 'center' }}>{item['Quantity']}</td>
              <td style={{ fontWeight: 600, color: 'var(--primary)' }}>${item['Total Amount']}</td>
              <td>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {item.Tags && item.Tags.split(',').map((tag, i) => (
                    <span key={i} className="tag">{tag.trim()}</span>
                    ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
