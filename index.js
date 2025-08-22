const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// ✅ Enable CORS before any routes
app.use(cors({
  origin: 'https://sonali-saluja-admin.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use('/api', require('./routes/experience'));
app.use('/api', require('./routes/about'));
app.use('/api', require('./routes/projects'));
app.use('/auth', require('./routes/login'));

// ✅ Default route
app.get('/', (req, res) => {
  res.send('Server is working!');
});

const PORT = process.env.PORT || 8080;
// ✅ Start server
app.listen(PORT, () => {
  console.log('Server is running on port 8080');
});
