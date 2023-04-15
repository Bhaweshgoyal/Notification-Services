const express = require("express"); 
const app = express();
const {PORT} = require("./config/server.config")
const {db_uri} = require("./config/db.config")
const mongoose = require('mongoose');
const {ticketNotificationRoute} = require("./routes/ticketNotification.route");
const bodyParser = require('body-parser');
const {job} = require("./crons/ticketNotification.cron");
const nodemailer = require('nodemailer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

ticketNotificationRoute(app);

app.listen(PORT  , () => {
    console.log("Conection Build successfully  " ,PORT );
    mongoose.connect(db_uri);
    job.start()
})

