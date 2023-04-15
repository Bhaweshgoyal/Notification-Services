const mongoose = require("mongoose");

const ticketNotificationSchema  = new mongoose.Schema({
    subject : {
        type : String,
        required : true , 
        maxLength : 200,
        minLength : 3,
    },
    content : {
        type : String , 
        required : true , 
    },
    recepientEmails :{
        type : [String],
        required : true , 
        default :"UNSENT"
    },
    sentStatus:{
        type: String,
        required: true,
        default: "UNSENT"
    },
    ticketId:{
        type: String,
        required: true,
    },
    requester  : {
        type : String,
        required : true,
        match : /\S+@\S+\.\S+/,  // validator for matching the proper EMAIL Address
    },
    createdAt : {
        type : Date , 
        immutable : true , // why it is setted to immutable 
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Notification" , ticketNotificationSchema)