const  routes  = require('express').Router();
const gitHubController = require('./controllers/githubController');
const swagger = require('../docs/index');

routes.get('/', (request, response) => { return response.json('Funcionando') });

routes.post('/SearchRepos', gitHubController.SearchRepos)

swagger.ui(routes);
module.exports = routes;