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

const corsOptions = {
  origin: 'https://bookmyslot.vercel.app', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Methods allowed
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers allowed
  credentials: true, // Allow credentials
  optionsSuccessStatus: 200, // Some browsers choke on 204
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/user', userRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
});
