


//js hint done


var userObj = {
  startdate: 0,
  returndate: 0,
  dayDifference: 0,
};

var myPicker = new Lightpick({
field: document.getElementById('start'), 

singleDate: false,
minDate: moment().toDate(),
minDays: 2,

  onSelect: function (start, end) {
    // window.bigpick = myPicker
  userObj.startdate = myPicker.getStartDate().format("Do MMM YYYY");
  
  if (myPicker.getEndDate()!==null){
    userObj.returndate = myPicker.getEndDate().format("Do MMM YYYY");  
  }    
calculateDays(myPicker);
logUserData();

  },
});


function calculateDays(picker) {
  if (userObj.startdate == 0 || userObj.returndate == 0) {
    console.log("dates incomplete");
    return;
  }

  var start = moment(picker.getStartDate());
  var end = moment(picker.getEndDate());
  var dayDiff = end.diff(start, "days");

  userObj.dayDifference = dayDiff;

  if ( userObj.dayDifference < 1 ) {
      alert ("check your return day again");
  }

  updateUI();
  logUserData();

  console.log("great lets compute the dates");
}







function updateUI() {
  var element = document.querySelectorAll(".user-nights");
  for (var i=0; i<element.length; i++){
    element[i].innerHTML = userObj.dayDifference + " Nights";
  }
  
var userCheckin = document.querySelector(".user-checkin");
userCheckin.innerHTML = "<h3>Check In</h3> <Br>" + userObj.startdate;

var userCheckOut = document.querySelector(".user-checkout");
userCheckOut.innerHTML = "<h3>Check Out</h3> <Br>"  + userObj.returndate;

var userDate = document.querySelector(".user-dates");
userDate.innerHTML = userObj.startdate + " ~ " + userObj.returndate;




}



function logUserData() {
  console.table(userObj);
}

