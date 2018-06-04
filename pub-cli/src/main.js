var pubs = require('pub-services').services;

function getListPub(){
    pubs.pubService.listPub();
}

function getListPubOpened(){
    pubs.pubService.listPubCurrentDay();
}

module.exports = {
    getListPub: getListPub,
    getListPubOpened: getListPubOpened
}