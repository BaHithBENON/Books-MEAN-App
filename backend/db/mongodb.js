const mongoose = require('mongoose');

const localDbUrl = 'mongodb://127.0.0.1:27017/books';
const remoteDbUrl = 'mongodb+srv://saazhal:as19cdls@cluster0.o0gfwzg.mongodb.net/?retryWrites=true&w=majority';
const connectDataBase = async () => {
    
    mongoose.connect(remoteDbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((cnx) => {
        console.log(`Database connected : ${cnx.connection.host}`);
    }).catch((error) => {
        console.log(`Database connection error : ${error}`);
    });
}

module.exports = connectDataBase;