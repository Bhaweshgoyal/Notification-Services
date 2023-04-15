const ticketNotificationController  = require("../controller/ticketNotification.controller");

const ticketNotificationRoute = (app) => {
    app.post("/notificationService/api/v1/notification" , ticketNotificationController.createTicketNotification);
}

module.exports = {
    ticketNotificationRoute
}