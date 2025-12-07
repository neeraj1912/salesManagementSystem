# Retail Sales Management System

## Overview
A web-based application for managing and analyzing retail sales data. Implements advanced search, multi-faceted filtering, sorting, and pagination functionalities.

## Tech Stack
- Frontend: React, Vite, CSS
- Backend: Node.js, Express

## Search Implementation
Full-text search is implemented on the backend. It checks for case-insensitive matches in **Customer Name** and **Phone Number** fields.

## Filter Implementation
Supports multi-criteria filtering:
- **Multi-select**: Region, Product Category, Payment Method, Tags.
- **Range**: Date Range, Age Range.
- Filters are additive (AND logic between groups, OR logic within multi-selects).

## Sorting Implementation
Supports server-side sorting by:
- Date (Newest First)
- Quantity
- Customer Name (A-Z)

## Pagination Implementation
Server-side pagination with a default page size of 10. Metadata (totalPages, totalItems, currentPage) is returned to control the frontend pagination UI.

## Setup Instructions

### Backend
1. Navigate to \`backend\` folder:
   \`\`\`bash
   cd backend
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the server:
   \`\`\`bash
   npm start
   \`\`\`
   Server runs on http://localhost:5000.

### Frontend
1. Navigate to \`frontend\` folder:
   \`\`\`bash
   cd frontend
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the application:
   \`\`\`bash
   npm run dev
   \`\`\`
   App runs on http://localhost:5173.

## Live Application URL
https://sales-management-system-kjto-oulbmeh3g.vercel.app/

