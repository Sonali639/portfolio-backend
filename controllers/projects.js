const model = require('../models/projects');

exports.getProjects = (req, res) => {
    model.find().then((projects) => {
        res.json(projects);
    });
};

exports.addProjects = async (req, res) => {
    try {
     const projects = new model(req.body);
      const savedProjects = await projects.save();
  
      res.status(201).json(savedProjects); // success response
    } catch (error) {
      console.error("Error saving projects:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };


  exports.deleteProjects = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleted = await model.findByIdAndDelete(id);
  
      if (!deleted) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      // ✅ Only send a safe response
      res.status(200).json({ message: 'Project deleted successfully' });
    } catch (err) {
      console.error("Error deleting project:", err.message);
      res.status(500).json({ error: err.message }); // Never return `err` directly
    }
  };

  exports.getSingleProject = async (req, res) => {
    try {
      const { id } = req.params;
      const project = await model.findById(id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.status(200).json(project);
    } catch (err) {
      console.error("Error fetching project:", err.message);
      res.status(500).json({ error: err.message });
    }
  };

  exports.editSingleProject = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProject = await model.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.status(200).json(updatedProject);
    } catch (err) {
      console.error("Error updating project:", err.message);
      res.status(500).json({ error: err.message });
    }
  };



  