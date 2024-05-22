import express from 'express';
import userRouter from './api/users.api.js';
import taskRouter from './api/todoList.api.js';
import connectToDatabase from './mongoose.js';

const app = express();

// Connect to the database
connectToDatabase();

// Middleware to parse JSON requests
app.use(express.json());

// Routes setup
app.use('/users', userRouter);

app.use('/todo', taskRouter);

// Fallback route for non-existing endpoints
app.use('*', (req, res) => {
  return res.status(404).json({
    error: true,
    message: 'API endpoint not found',
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  return res.status(error.status || 500).json({
    error: true,
    message: error.message,
  });
});

export default app;
