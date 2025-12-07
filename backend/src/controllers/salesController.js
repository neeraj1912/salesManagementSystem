const salesService = require('../services/salesService');

const getSales = (req, res) => {
    try {
        let {
            search,
            page = 1,
            limit = 10,
            sortBy,
            sortOrder = 'asc',
            region,
            gender,
            minAge,
            maxAge,
            category,
            tags,
            paymentMethod,
            startDate,
            endDate
        } = req.query;

        let filteredData = salesService.getAllSales();

        // 1. Search (Customer Name, Phone Number)
        if (search) {
            const searchLower = search.toLowerCase();
            filteredData = filteredData.filter(item =>
                (item['Customer Name'] && item['Customer Name'].toLowerCase().includes(searchLower)) ||
                (item['Phone Number'] && item['Phone Number'].includes(search))
            );
        }

        // 2. Filters
        // Region (Multi-select)
        if (region) {
            const regions = region.split(',');
            filteredData = filteredData.filter(item => regions.includes(item['Customer Region']));
        }

        // Gender
        if (gender) {
            const genders = gender.split(',');
            filteredData = filteredData.filter(item => genders.includes(item['Gender']));
        }

        // Age Range
        if (minAge) {
            filteredData = filteredData.filter(item => item['Age'] >= parseInt(minAge));
        }
        if (maxAge) {
            filteredData = filteredData.filter(item => item['Age'] <= parseInt(maxAge));
        }

        // Product Category (Multi-select)
        if (category) {
            const categories = category.split(',');
            filteredData = filteredData.filter(item => categories.includes(item['Product Category']));
        }

        // Tags
        if (tags) {
            const tagList = tags.split(',').map(t => t.trim().toLowerCase());
            filteredData = filteredData.filter(item => {
                if (!item['Tags']) return false;
                const itemTags = item['Tags'].split(',').map(t => t.trim().toLowerCase());
                return tagList.some(tag => itemTags.includes(tag));
            });
        }

        // Payment Method
        if (paymentMethod) {
            const methods = paymentMethod.split(',');
            filteredData = filteredData.filter(item => methods.includes(item['Payment Method']));
        }

        // Date Range
        if (startDate) {
            filteredData = filteredData.filter(item => new Date(item['Date']) >= new Date(startDate));
        }
        if (endDate) {
            filteredData = filteredData.filter(item => new Date(item['Date']) <= new Date(endDate));
        }

        // 3. Sorting
        if (sortBy) {
            filteredData.sort((a, b) => {
                let valA = a[sortBy];
                let valB = b[sortBy];

                if (sortBy === 'Date') {
                    valA = new Date(valA);
                    valB = new Date(valB);
                } else if (typeof valA === 'string' && typeof valB === 'string') {
                    valA = valA.toLowerCase();
                    valB = valB.toLowerCase();
                }

                if (valA < valB) return sortOrder === 'desc' ? 1 : -1;
                if (valA > valB) return sortOrder === 'desc' ? -1 : 1;
                return 0;
            });
        } else {
            filteredData.sort((a, b) => new Date(b['Date']) - new Date(a['Date']));
        }

        // 4. Pagination
        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);
        const startIndex = (pageInt - 1) * limitInt;
        const endIndex = startIndex + limitInt;
        const paginatedData = filteredData.slice(startIndex, endIndex);

        const totalItems = filteredData.length;
        const totalPages = Math.ceil(totalItems / limitInt);

        res.json({
            data: paginatedData,
            meta: {
                totalItems,
                totalPages,
                currentPage: pageInt,
                pageSize: limitInt
            }
        });

    } catch (error) {
        console.error('Error processing sales request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getFilterOptions = (req, res) => {
    try {
        const options = salesService.getFilterOptions();
        res.json(options);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching options' });
    }
}

module.exports = {
    getSales,
    getFilterOptions
};
