const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/routes');
const Connection = require('./database/db');
require('dotenv').config();

Connection();
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(route);

app.listen(process.env.PORT, () => console.log(`Server Running at http://localhost:${process.env.PORT}`));