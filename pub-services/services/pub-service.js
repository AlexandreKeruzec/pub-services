var pubs = require('../mocks/pubs.json');

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function listPub() {
    console.log(pubs);
    return pubs;
}

function listPubCurrentDay() {
    var openPubs = [];
    var TodayDate = new Date();
    var d = TodayDate.getDay();
    pubs.forEach(pub => {
        pub.openDays.forEach(day => { if (day == weekday[d]) { openPubs.push(pub); } })
    });
    console.log(openPubs);
    return openPubs;
}

module.exports = {
    listPub: listPub,
    listPubCurrentDay: listPubCurrentDay
}