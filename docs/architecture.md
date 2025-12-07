# Architecture Document - Retail Sales Management System

## 1. Overview
The Retail Sales Management System is a full-stack application designed to manage, search, filter, and visualize sales data. It follows a client-server architecture with a clear separation of concerns.

## 2. Tech Stack
- **Frontend**: React (Vite), CSS3, Axios
- **Backend**: Node.js, Express.js
- **Data**: JSON (Mock/File-based), handled in-memory for performance.

## 3. Architecture

### Backend Architecture
The backend uses a standard MVC (Model-View-Controller) structure, although simplified to Controller-Service logic (without database models for this file-based assignment).
- **Entry Point**: \`src/index.js\` initializes the Express app and middleware.
- **Routes**: \`src/routes/salesRoutes.js\` defines API endpoints.
- **Controllers**: \`src/controllers/salesController.js\` contains the business logic for searching, filtering, sorting, and pagination.
- **Data Layer**: Data is loaded from \`sales_data.json\` into memory on startup to ensure fast read operations.

### Frontend Architecture
The frontend is a Single Page Application (SPA) built with React.
- **Components**: Reusable UI elements (\`SalesTable\`, \`FilterPanel\`, \`SearchBar\`, etc.).
- **State Management**: Local component state (cleaning and filtering params) lifted to \`App.jsx\` as the single source of truth for the active view.
- **API integration**: \`src/utils/api.js\` encapsulates Axios calls.

## 4. Data Flow
1. **Request**: User interacts with UI (Search, Filter, Sort).
2. **Dispatch**: Frontend sends GET request to \`/api/sales\` with query parameters (e.g., \`?search=John&region=North&sortBy=Date\`).
3. **Processing**: Backend receives request, parses parameters, and applies operations on the in-memory sales array.
4. **Response**: Backend returns a JSON object containing the filtered \`data\` array and \`meta\` object (pagination info).
5. **Render**: Frontend updates the state and re-renders the table.

## 5. Folder Structure
- \`backend/\`: Server code.
- \`frontend/\`: Client code.
- \`docs/\`: Documentation.
