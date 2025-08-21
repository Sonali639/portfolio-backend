const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    mainImage: String,
    coverImage: String,
    title: String,
    description: String,
    technologies: [String],
    githubLink: String,
    liveLink: String,
    projectType: String,
})

module.exports = mongoose.model('Project', projectSchema);