const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Online Library API!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
