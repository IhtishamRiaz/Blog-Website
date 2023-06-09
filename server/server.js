const express = require('express');
const app = express();
const cors = require('cors');
const Connection = require('./database/db');
require('dotenv').config();
const postsRoute = require('./routes/posts');
const loginAuthRoute = require('./routes/loginAuth');
const registerRoute = require('./routes/register');
const userRoute = require('./routes/userRoutes');
const commentsRoute = require('./routes/comments');

Connection();
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// set routes
app.use('/', postsRoute);
app.use('/', loginAuthRoute);
app.use('/', registerRoute);
app.use('/', userRoute);
app.use('/', commentsRoute);

app.listen(process.env.PORT, () => console.log(`Server Running at http://localhost:${process.env.PORT}`));