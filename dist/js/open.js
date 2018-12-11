var now = new Date();
var weekday = new Array(7);
weekday[0] = "Κυριακη";
weekday[1] = "Δευτερα";
weekday[2] = "Τριτη";
weekday[3] = "Τεταρτη";
weekday[4] = "Πεμπτη";
weekday[5] = "Παρασκευη";
weekday[6] = "Σαββατο";

var checkTime = function () {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById("timeDiv");
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  //add AM or PM
  var suffix = hour >= 12 ? " μ.μ" : " π.μ";

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // if ((dayOfWeek == 0 || dayOfWeek == 6) && hour >= 13 && hour <= 23) {
  //   hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
  //   timeDiv.innerHTML = 'it\'s ' + today + ' ' + hour + ':' + minutes + suffix + ' - we\'re open!';
  //   timeDiv.className = 'open';
  // }
  if (
    dayOfWeek == 1 ||
    dayOfWeek == 2 ||
    dayOfWeek == 3 ||
    dayOfWeek == 4 ||
    dayOfWeek == 5
  ) {
    if ((hour >= 9 && hour < 14) || (hour >= 17 && hour < 20)) {
      hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
      timeDiv.innerHTML =
        // "it's " +
        today + " " + hour + ":" + minutes + suffix + " - ανοικτα!";
      timeDiv.className = "open";
    } else if (hour == 8 && minutes >= 15) {
      hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
      timeDiv.innerHTML =
        // "it's " +
        today + " " + hour + ":" + minutes + suffix + " - ανοικτα!";
      timeDiv.className = "open";
    } else if (hour == 14 && minutes < 30) {
      hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
      timeDiv.innerHTML =
        // "it's " +
        today + " " + hour + ":" + minutes + suffix + " - ανοικτα!";
      timeDiv.className = "open";
    } else if (hour == 20 && minutes < 30) {
      hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
      timeDiv.innerHTML =
        // "it's " +
        today + " " + hour + ":" + minutes + suffix + " - ανοικτα!";
      timeDiv.className = "open";
    } else {
      if ((hour == 14 && minutes >= 30) || (hour >= 15 && hour < 17)) {
        hour = ((hour + 11) % 12) + 1;
        timeDiv.innerHTML =
          // "It's " +
          today +
          " " +
          hour +
          ":" +
          minutes +
          suffix +
          " - Κλειστα! Ανοιγουμε στις 17:00";
        timeDiv.className = "closed";
      } else {
        hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
        // if (hour == 0 || hour > 12) {
        //   hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
        // }
        timeDiv.innerHTML =
          today + " " + hour + ":" + minutes + suffix + " - Κλειστα!";
        timeDiv.className = "closed";
      }
    }
  } else {
    hour = ((hour + 11) % 12) + 1; //i.e. show 1:15 instead of 13:15
    timeDiv.innerHTML =
      // "It's " +
      today + " " + hour + ":" + minutes + suffix + " - Κλειστα!";
    timeDiv.className = "closed";
  }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 1000);
checkTime();