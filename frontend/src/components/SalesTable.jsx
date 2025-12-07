// import React from 'react';

// const SalesTable = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div style={{ padding: '2rem', textAlign: 'center' }}>No results found.</div>;
//   }

//   return (
//     <div className="table-card">
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Customer</th>
//             <th>Region</th>
//             <th>Product</th>
//             <th>Category</th>
//             <th>Quantity</th>
//             <th>Total</th>
//             <th>Tags</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td style={{ whiteSpace: 'nowrap', color: 'var(--text-secondary)' }}>
//                 {new Date(item.Date).toLocaleDateString()}
//               </td>
//               <td>
//                 <div style={{ fontWeight: 500 }}>{item['Customer Name']}</div>
//                 <small style={{ color: 'var(--text-secondary)' }}>{item['Phone Number']}</small>
//               </td>
//               <td>{item['Customer Region']}</td>
//               <td style={{ fontWeight: 500 }}>{item['Product Name']}</td>
//               <td>
//                 <span style={{ 
//                     padding: '0.25rem 0.6rem', 
//                     borderRadius: '20px', 
//                     background: '#f1f5f9', 
//                     fontSize: '0.85rem' 
//                 }}>
//                     {item['Product Category']}
//                 </span>
//               </td>
//               <td style={{ textAlign: 'center' }}>{item['Quantity']}</td>
//               <td style={{ fontWeight: 600, color: 'var(--primary)' }}>${item['Total Amount']}</td>
//               <td>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
//                     {item.Tags && item.Tags.split(',').map((tag, i) => (
//                     <span key={i} className="tag">{tag.trim()}</span>
//                     ))}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SalesTable;


import React from 'react';
import './SalesTable.css';

const SalesTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <h3>No Results Found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="table-card">
      <div className="table-wrapper">
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
              <tr key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                <td className="date-cell">
                  {new Date(item.Date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>
                <td className="customer-cell">
                  <div className="customer-name">{item['Customer Name']}</div>
                  <div className="customer-phone">{item['Phone Number']}</div>
                </td>
                <td className="region-cell">
                  <span className="region-badge">{item['Customer Region']}</span>
                </td>
                <td className="product-cell">{item['Product Name']}</td>
                <td>
                  <span className="category-badge">
                    {item['Product Category']}
                  </span>
                </td>
                <td className="quantity-cell">
                  <span className="quantity-value">{item['Quantity']}</span>
                </td>
                <td className="amount-cell">
                  ${Number(item['Total Amount']).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </td>
                <td className="tags-cell">
                  <div className="tags-wrapper">
                    {item.Tags && item.Tags.split(',').slice(0, 3).map((tag, i) => (
                      <span key={i} className="tag">{tag.trim()}</span>
                    ))}
                    {item.Tags && item.Tags.split(',').length > 3 && (
                      <span className="tag tag-more">+{item.Tags.split(',').length - 3}</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;