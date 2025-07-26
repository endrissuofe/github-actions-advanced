const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'GitHub Actions Advanced Course Demo',
    status: 'running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    uptime: process.uptime(),
    timestamp: new Date().toISOString() 
  });
});

// Custom 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling
app.use((err, req, res) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    // Removed console.log to avoid ESLint no-console warning
  });
}

module.exports = app;