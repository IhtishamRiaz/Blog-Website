const express = require('express');
const app = express();
const cors = require('cors');
const Connection = require('./database/db');
require('dotenv').config();
const route = require('./routes/routes');
const loginAuthRoute = require('./routes/loginAuth');
const registerRoute = require('./routes/register');
const userRoute = require('./routes/userRoutes');

Connection();
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// set routes
app.use('/', route);
app.use('/', loginAuthRoute);
app.use('/', registerRoute);
app.use('/', userRoute);

app.listen(process.env.PORT, () => console.log(`Server Running at http://localhost:${process.env.PORT}`));