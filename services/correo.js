const nodemailer = require('nodemailer');
require('dotenv').config();

function EnviarCorreo(Correo){
  const mailOptions = {
      from: process.env.DB_EMAIL,
      to: Correo,
      subject: 'Crear evento',
      text: 'Se creo correctamente el evento',
  };

  const transporter = nodemailer.createTransport({
    service: 'SMTP',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user:process.env.DB_EMAIL,
        pass: process.env.DB_PASS,
    },
  });

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = {EnviarCorreo}