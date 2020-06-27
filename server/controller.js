require('dotenv').config();
const nodemailer = require('nodemailer');

const controller = {
    post: (req, res) => {
        var data = req.body;
        var smtpTransport = nodemailer.createTransport({
          service: 'Gmail',
          port: 465,
          auth: {
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
}

module.exports = controller;