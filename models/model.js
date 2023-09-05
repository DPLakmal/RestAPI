// mongoose data schema

const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
username:{
    type: String,
    require: true,
},
password:{
    type: Number,
    require: true,
},
createdDate:{
    type: Date,
    require: true,
    default: Date.now
}
})

module.exports = mongoose.model('user', userSchema)