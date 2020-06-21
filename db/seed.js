var mongoose = require('mongoose');
const Message = require('./index');
const data = require('../sample.json');

var insertSeedData = function () {
    Message.insertMany(data)
        .then(() => mongoose.connection.close())
        .catch((err) => console.log(err))
}

insertSeedData();