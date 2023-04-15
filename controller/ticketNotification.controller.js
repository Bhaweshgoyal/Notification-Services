const ticketNotificationService = require("../service/ticketNotification.service");

const createTicketNotification = async(req,res) => {
    try {
        const response = await ticketNotificationService.createTicketNotification(req.body);
        if(response.notification){
            res.status(201).json({
                data:response.notification , 
                status : "Notification is created"
            })
        }else{
            res.status(401).json({
                status  : "Notification is not created",
                data : response
            })
        }
    }catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

module.exports = {
    createTicketNotification
}