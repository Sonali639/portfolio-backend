const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    start_date: String,
    end_date: String,
    location: String, 
    description: String,
})

// {
//     "company": "demo",
//    "role": "ui ux ",
//    "start_date": "5 jan",
//    "end_date": "10 jan",
//    "location": "Delhi", 
// }
module.exports = mongoose.model('Experience', experienceSchema);
