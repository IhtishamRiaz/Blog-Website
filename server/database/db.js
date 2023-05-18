const mongoose = require('mongoose');
require('dotenv').config();

const Connection = async () => {
    const URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@blogs.wo9ey7i.mongodb.net/`
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected succesfully')
    } catch (error) {
        console.log('Error from connection', error.message)
        console.log(process.env.USER);
    }
}

module.exports = Connection;