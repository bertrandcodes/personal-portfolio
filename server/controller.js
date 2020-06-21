var helpers = require('../db/dbhelpers');

const controller = {
    post: (req, res) => {
        var item = req.body
        helpers
            .post(item)
            .then(() => res.send(200).end(console.log('posted')))
            .catch((err) => res.send(err))
      }
}

module.exports = controller;