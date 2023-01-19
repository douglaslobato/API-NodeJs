const mongoose = require('mongoose')

const Job = mongoose.model('Job', {
    nameJob: String,
    department: String,
})

module.exports = Job