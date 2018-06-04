var pubService = require('./services/pub-service.js');

console.log("pubservice.listPub()");
console.log(pubService.listPub());
console.log("pubservice.listPubCurrentDay()");
console.log(pubService.listPubCurrentDay());

module.exports = {
    services: {
        pubService: pubService
    }
}