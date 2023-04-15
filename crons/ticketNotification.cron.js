const { sendNotificatioMail } = require('../notifier/mailerService');
const { getAllUnsentNotification , setStatusSent } = require('../service/ticketNotification.service');

 var CronJob = require('cron').CronJob ; 
 var job = new CronJob(
    "05 * * * * *" , 
   async function() { 
    try{
        console.log("You will see this message every second") ;
        const unsentnotification = await getAllUnsentNotification();
        unsentnotification.forEach(async (notification) => {
        notification.recepientEmails.forEach(recepients => {
        sendNotificatioMail(recepients , notification.subject , notification.content , "<b><h5>Thanks for Visiting CRM app</h5></b>" )
        })
        await setStatusSent(notification)
 })
    }
      catch(err) {
        console.log(err);
        return err.message
      }
    } , 
    null , 
    false , 
    "Asia/kolkata"
 );

 module.exports  =  {job}


 