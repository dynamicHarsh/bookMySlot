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

app.use(cors({
  origin: 'https://bookmyslot.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/user', userRouter);

app.options('*', cors({
  origin: 'https://bookmyslot.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening at port ${port} in ${process.env.NODE_MODE} mode`);
});
