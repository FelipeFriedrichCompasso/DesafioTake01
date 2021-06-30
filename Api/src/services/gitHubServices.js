const axios = require('axios');

module.exports = class gitHubServices{

    static async SearchRepos(sort, direction){
        
        try {           
            var apiResponse = await axios.get('https://api.github.com/users/takenet/repos', {
                params: {
                    sort,
                    direction,
                }
            });        
            return apiResponse;
            
        } catch (error) {
            error.status = error.response.status;
            return error
        }
        
    }
}