const  routes  = require('express').Router();
const gitHubController = require('./controllers/githubController');

routes.get('/', (request, response) => { return response.json('Funcionando') });

routes.post('/SearchRepos', gitHubController.SearchRepos)

module.exports = routes;