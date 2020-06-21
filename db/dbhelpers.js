var Message = require('./index.js');

var helpers = {
    post: (item) => Message.create(item),
}

module.exports = helpers