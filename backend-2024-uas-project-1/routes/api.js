require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const alumniRoutes = require('./routes/alumniRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', alumniRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
