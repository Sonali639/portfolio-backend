const model = require('../models/experience');

exports.getExperience = (req, res) => {
  // Add sorting by start_date in descending order
  model.find().sort({ start_date: -1 })  // -1 is descending order
    .then((experience) => {
      res.json(experience);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error fetching experiences", error: err });
    });
};


exports.addExperience = async (req, res) => {
    try {
     const experience = new model(req.body);
      const savedExperience = await experience.save();
  
      res.status(201).json(savedExperience); // success response
    } catch (error) {
      console.error("Error saving experience:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
  exports.deleteExperience = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleted = await model.findByIdAndDelete(id);
  
      if (!deleted) {
        return res.status(404).json({ message: 'Experience not found' });
      }
  
      // ✅ Only send a safe response
      res.status(200).json({ message: 'Experience deleted successfully' });
    } catch (err) {
      console.error("Error deleting experience:", err.message);
      res.status(500).json({ error: err.message }); // Never return `err` directly
    }
  };

  exports.editExperience = async(req,res)=>{
    try{
        const {id} = req.params;
        const updatedExperience = await model.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedExperience);
    }
    catch(error){
        console.error("Error updating experience:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
  }

  exports.getSingleExperience = async (req, res) => {
    try {
      const { id } = req.params;
      const experience = await model.findById(id);
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }
      res.status(200).json(experience);
    } catch (err) {
      console.error("Error fetching experience:", err.message);
      res.status(500).json({ error: err.message });
    }
  };
