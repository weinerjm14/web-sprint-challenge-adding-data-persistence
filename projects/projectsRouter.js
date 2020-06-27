const express = require('express');

const Projects = require('./projects_model');

const router = express.Router();
router.get('/', (req, res) => {
  Projects.getProjects()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});
router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});
router.get('/tasks', (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks', err });
    });
});
router.post('/', (req, res) => {
  const project = req.body;
  Projects.addProject(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new project', err });
    });
});
router.post('/resources', (req, res) => {
  const resource = req.body;
  Projects.addResource(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource', err });
    });
});

module.exports = router;
