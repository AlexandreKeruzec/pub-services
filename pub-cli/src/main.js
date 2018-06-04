var pubs = require('pub-services').services;

function getListPub(){
    pubs.pubService.listPub();
}

function getListPubCurrentDay(){
    pubs.pubService.listPubCurrentDay();
}

module.exports = {
    getListPub: getListPub,
    getListPubCurrentDay: getListPubCurrentDay
}