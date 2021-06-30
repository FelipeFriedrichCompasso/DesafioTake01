const gitHubServices = require("../services/gitHubServices")

module.exports = class gitHubController{

    static async SearchRepos(req, resp){
        //utilizando variaveis vinda do corpo do texto para que a função não fique estatica e possa ser utilizada em outros lugares da aplicação
        var { sort, direction, language } = req.body
        var apiResponse = await gitHubServices.SearchRepos(sort, direction);
        var returnArray = [];
        if(apiResponse.status == 200){
            apiResponse.data = apiResponse.data.filter(repo=> repo.language == language)
            for (var i = 0; i < 5; i++){
                var node = {
                    name: apiResponse.data[i].name,
                    avatar: apiResponse.data[i].owner.avatar_url,
                    description: apiResponse.data[i].description,
                }
                returnArray.push(node);
            }
        }            
        
        return resp.status(apiResponse.status).json(returnArray);
    }

}