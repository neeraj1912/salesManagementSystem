// Load data into memory
let salesData = [];
try {
    salesData = require('../data/sales_data.json');
} catch (error) {
    console.error('Error loading sales data:', error.message);
    salesData = [];
}

const getAllSales = () => {
    return salesData;
};

const getFilterOptions = () => {
    const regions = [...new Set(salesData.map(item => item['Customer Region']).filter(Boolean))];
    const categories = [...new Set(salesData.map(item => item['Product Category']).filter(Boolean))];
    const paymentMethods = [...new Set(salesData.map(item => item['Payment Method']).filter(Boolean))];
    const allTags = salesData.flatMap(item => item['Tags'] ? item['Tags'].split(',') : []).map(t => t.trim());
    const uniqueTags = [...new Set(allTags)];

    return {
        regions,
        categories,
        paymentMethods,
        tags: uniqueTags
    };
};

module.exports = {
    getAllSales,
    getFilterOptions
};
