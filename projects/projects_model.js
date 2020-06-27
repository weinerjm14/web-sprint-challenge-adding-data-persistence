const db = require('../data/dbConfig');
const { schema, select } = require('../data/dbConfig');

function getProjects() {
  return db.select('*').from('project');
}
function getResources() {
  return db.select('*').from('resources');
}
function getTasks() {
  return db('tasks as t')
    .join('project as p', 'p.id', 't.project_id')
    .select(
      'p.name as project name',
      'p.description as project description',
      't.description as task',
      't.notes as task notes'
    );
}
function addProject(project) {
  return db('project')
    .insert(project)
    .then(id => {
      return findById(id[0]);
    });
}
function addResource(resource) {
  return db('resources')
    .insert(resource)
    .then(id => {
      return findById(id[0]);
    });
}
module.exports = {
  getProjects,
  getResources,
  addProject,
  addResource,
  getTasks,
};
