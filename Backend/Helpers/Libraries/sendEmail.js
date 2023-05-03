const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
    //Create Email Transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port:587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        
    },
    tls: {
        rejectUnauthorized: false,
    }
});

//send email
transporter.sendMail(mailOptions, function (err, info) {
    if (err){
        console.log(err);
    }
    else{
    console.log(info);
    }
});

};


module.exports = sendEmail;


