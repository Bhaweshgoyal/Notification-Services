//"mongodb://127.0.0.1:27017/<db_name>";
require('dotenv').config();

const notificationServiceDbUri = 'mongodb+srv://bhaweshg0777:RJqSUUWVgkuHcApK@notificationservice.f89ceep.mongodb.net/?retryWrites=true&w=majority';
const dbName = "crmapp-db";
module.exports = { db_uri: notificationServiceDbUri, dbName };