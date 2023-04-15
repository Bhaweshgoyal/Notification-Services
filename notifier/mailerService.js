const nodemailer = require('nodemailer');

const {EMAIL_ADDRESS,EMIL_PASSWORD , EMAIL_HOST, EMAIL_PASSWORD} = require('../config/mailer.config');


const transporter = nodemailer.createTransport({
    pool : true , 
    host : EMAIL_HOST , 
    port : 465 , 
    secure :true , 
    auth : {
        user : EMAIL_ADDRESS , 
        pass : EMAIL_PASSWORD,
    }
})
 
const sendNotificatioMail = (to , subject,text ,html) => {
    const message = {
        from : EMAIL_ADDRESS , 
        to : to , 
        subject : subject, 
        text :text,
        html :html,
    };
    transporter.sendMail(message , (err , Info) => {
        if(err) { 
            console.log("error" , err);
        }else{
            console.log("Info" , Info)
        }
    })
}

module.exports = {
    sendNotificatioMail
}