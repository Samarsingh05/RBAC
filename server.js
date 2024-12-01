const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); 
const secureRoutes = require('./routes/secure'); 

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes); 
app.use('/secure', secureRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
