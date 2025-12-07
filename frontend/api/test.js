try {
    const app = require('./index.js');
    console.log('Successfully loaded api/index.js');
} catch (error) {
    console.error('Failed to load api/index.js:', error);
    process.exit(1);
}
