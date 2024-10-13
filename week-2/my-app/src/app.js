const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userroutes');
const errorMiddleware = require('./middlewares/errormiddleware');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
