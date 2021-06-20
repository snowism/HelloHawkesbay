var accommoList = [
  { type: "hotel", minpp: 1, maxpp: 2, minnights: 1, maxnights: 5 },
  { type: "hostel", minpp: 1, maxpp: 1, minnights: 1, maxnights: 10 },
  { type: "motel", minpp: 2, maxpp: 4, minnights: 5, maxnights: 10 },
  { type: "house", minpp: 1, maxpp: 4, minnights: 2, maxnights: 15 },
];

var theGuestNum = document.querySelector(".user-guest");
var searchBtn = document.querySelector(".btn-search");
searchBtn.addEventListener("click", showTheList);

function showTheList() {
  var bookedGuest = theGuestNum.innerText;
  var bookedDays = userObj.dayDifference;

  var result = accommoList.filter(
    (accommoList) =>
      accommoList.maxpp >= bookedGuest  && 
     bookedGuest >= accommoList.minpp  && 
     accommoList.maxnights >= bookedDays && 
     bookedDays >= accommoList.minnights
  );

if (bookedGuest < 1 || bookedDays < 1 ){
  alert ("please check your journey again");
}

if (bookedGuest > 4) {
  alert ("Maximum guest number is 4");
}

if (bookedDays > 15){
  alert ("Maximum booking days is 14");
}

  var filtering = result.map((e) => e.type);

  var listArrays = document.querySelectorAll(".list");

  for (var i = 0; i < listArrays.length; i++) {
    var accommo = listArrays[i];
    var listValue = accommo.getAttribute("data-value");

    for (var j = 0; j < filtering.length; j++) {
      var currentFilter = filtering[j];
      if (listValue == currentFilter) {
        var term = "." + currentFilter;
        var resultEle = document.querySelector(term);
        
        resultEle.classList.remove("hide");
        resultEle.classList.add("show");
      

      } 
    }

    
  }
  
 
        
}

console.table(accommoList);

