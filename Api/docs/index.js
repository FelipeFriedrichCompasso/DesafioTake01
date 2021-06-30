const swaggerUi = require('swagger-ui-express');
const { readFileSync } = require('fs');

const swagger = readFileSync('./docs/swagger.json');
const swaggerDocument = JSON.parse(swagger);

class Swagger {
  
  static host(req, _, next) {
    swaggerDocument.host = req.get('host');
    req.swaggerDoc = swaggerDocument;
    next();
  }

  static ui(router) {
    router.use('/docs', this.host, swaggerUi.serve);
    router.get('/docs', swaggerUi.setup(swaggerDocument));
  }
}

module.exports = Swagger