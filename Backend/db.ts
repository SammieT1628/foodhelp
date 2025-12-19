const mongoose = require('mongoose')
const MONGO_URI = 'mongodb://localhost:27017/';

mongoose.connnect(MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> {
        console.log('Connected to MongoDB')
    })
    .catch((error: any) => {
        console.error('Error connecting to MongoDB:', error);
    });