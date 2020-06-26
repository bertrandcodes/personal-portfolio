const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

const port = 9001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

// app.use('/', router)


app.listen(port, () => console.log(`Listening on port ${port}`));