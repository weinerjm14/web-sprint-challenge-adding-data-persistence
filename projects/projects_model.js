const db = require('../data/dbConfig');

function getProjects() {
  return db.select('*').from('project');
}
function getProjectsById(id) {
  return db.select('*').from('project').where(id);
}
function getResources() {
  return db.select('*').from('resources');
}
function getResourcesById(id) {
  return db.select('*').from('resources').where(id);
}
function getTasks() {
  return db('tasks as t')
    .join('project as p', 'p.id', 't.project_id')
    .select(
      'p.name as project name',
      'p.description as project description',
      't.discription as task',
      't.notes as task notes'
    );
}
function addProject(project) {
  return db('project').insert(project);
  // .then(id => {
  //   return getProjectsById(id);
  // });
}
function addResource(resource) {
  return db('resources').insert(resource);
  // .then(id => {
  //   return getResourcesById(id[0]);
  // });
}
function addTasks(task) {
  return db('tasks').insert(task);
}

module.exports = {
  getProjects,
  getResources,
  addProject,
  addResource,
  getTasks,
  getProjectsById,
  addTasks,
};
