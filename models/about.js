const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: [String],
  description: String,
  resume: String,
  totalExperience: String,
  totalProjects: String,
  skills: [
    {
      image: String,
      name: String,
    },
  ],
});

// Optional: Prevent creating multiple About models if already compiled
module.exports = mongoose.models.About || mongoose.model('About', aboutSchema);
