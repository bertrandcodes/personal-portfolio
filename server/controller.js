require('dotenv').config();
var helpers = require('../db/dbhelpers');
const nodemailer = require('nodemailer');

const controller = {
    post: (req, res) => {
        var data = req.body;
        var smtpTransport = nodemailer.createTransport({
          service: 'Gmail',
          port: 465,
          auth: {
            // user: `${gmail.user}`,
            // pass: `${gmail.password}`
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
          }
        });
        var mailOptions = {
          from: data.email,
          to: process.env.EMAIL,
          subject: 'Message from Bertrandshao.com',
          html: `<p>First Name: ${data.first}</p>
                  <p>Last Name: ${data.last}</p>
                  <p>Email: ${data.email}</p>
                  <p>Message: ${data.message}</p>`
        };
        smtpTransport.sendMail(mailOptions,
          (error, response) => {
            if(error) {
                console.log(error)
              res.send(error)
            }else {
                console.log('success')
              res.send('Success')
            }
            smtpTransport.close();
          });
    
      }
    // post: (req, res) => {
    //     var item = req.body
    //     helpers
    //         .post(item)
    //         .then(() => res.send(200).end(console.log('posted')))
    //         .catch((err) => res.send(err))
    //   }
}

module.exports = controller;