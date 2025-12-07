const express = require('express');
const cors = require('cors');
const salesRoutes = require('./routes/salesRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sales', salesRoutes);

app.get('/', (req, res) => {
    res.send('Retail Sales Management System API is running.');
});

module.exports = app;
