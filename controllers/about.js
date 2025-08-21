const model = require('../models/about');

// ✅ GET - Return single About (assuming only one document exists)
exports.getAbout = async (req, res) => {
  try {
    const about = await model.findOne(); // use findOne instead of find
    if (!about) {
      return res.status(404).json({ message: "About content not found" });
    }
    res.status(200).json(about);
  } catch (error) {
    console.error("Error fetching about data:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ POST - Add new About
exports.addAbout = async (req, res) => {
  try {
    const about = new model(req.body);
    const savedAbout = await about.save();
    res.status(201).json(savedAbout);
  } catch (error) {
    console.error("Error saving about:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

 
// ✅ PUT - Update the first About document (no ID required)
exports.editAbout = async (req, res) => {
    try {
      const updatedAbout = await model.findOneAndUpdate({}, req.body, {
        new: true,
      });
  
      if (!updatedAbout) {
        return res.status(404).json({ message: "No About entry found to update" });
      }
  
      res.status(200).json(updatedAbout);
    } catch (error) {
      console.error("Error updating about:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
