// const express = require('express');
// const cors = require('cors');
// const yahooFinance = require('yahoo-finance2').default;
// require('dotenv').config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

// // ✅ Safe import of risk routes
// try {
//   const riskRoutes = require('./routes/risk');
//   app.use('/api/risk', riskRoutes);
// } catch (err) {
//   console.error("❌ Failed to load './routes/risk'. Please check for syntax errors.");
//   console.error(err);
// }

// // ✅ Market quote endpoint
// app.get('/api/quote', async (req, res) => {
//   const symbols = req.query.symbols;
//   if (!symbols) {
//     return res.status(400).json({ error: 'Missing symbols query parameter.' });
//   }

//   const symbolArray = symbols.split(',');
//   try {
//     const result = await yahooFinance.quote(symbolArray);
//     res.json({ quoteResponse: { result } });
//   } catch (error) {
//     console.error('Error fetching data from yahoo-finance2:', error);
//     res.status(500).json({ error: 'Failed to fetch data from Yahoo Finance.' });
//   }
// });

// // ✅ Catch-all for invalid routes
// app.all('*', (req, res) => {
//   res.status(404).send(`Invalid API route: ${req.method} ${req.originalUrl}`);
// });

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });



// backend/server.js
const express = require('express');
const cors = require('cors');
const yahooFinance = require('yahoo-finance2').default;
require('dotenv').config();
const app = express();
app.use(cors());

app.get('/api/quote', async (req, res) => {
  const symbols = req.query.symbols;
  if (!symbols) {
    return res.status(400).json({ error: 'Missing symbols query parameter.' });
  }
  
  const symbolArray = symbols.split(',');
  try {
    const result = await yahooFinance.quote(symbolArray);
    res.json({ quoteResponse: { result } });
  } catch (error) {
    console.error('Error fetching data from yahoo-finance2:', error);
    res.status(500).json({ error: 'Failed to fetch data from Yahoo Finance.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});