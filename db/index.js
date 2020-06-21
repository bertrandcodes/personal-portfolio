var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messages', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected mongodb'));

var messageSchema = mongoose.Schema({
    first: String,
    last: String,
    email: String,
    message: String
})

var Message = mongoose.model('Message', messageSchema)

module.exports = Message;