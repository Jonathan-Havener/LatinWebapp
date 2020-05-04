var mongoose = require('mongoose');
const Schema = mongoose.Schema

const userInfoSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    userName : {
        type: String,
        required: true,
        unique: true
    },
    userGroup : Array
})

const myDb= mongoose.connection.useDb('myDb');
module.exports = myDb.model('userInfo', userInfoSchema);