const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const path = require('path');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://bookmyslot.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Handle preflight (OPTIONS) requests
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/user', userRouter);

// Serve static files for client
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
});
