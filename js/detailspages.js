// open details

var listEle = document.querySelectorAll(".accommo-img");
var detailArray = document.querySelectorAll(".list-detail");

for (var i = 0; i < listEle.length; i++) {
  listEle[i].addEventListener("click", openDetails);
  listEle[i].addEventListener("click", priceCal);

  function openDetails(event) {
    var clickedEle = event.target;
    var theValue = clickedEle.getAttribute("data-value");

    console.log("open");

    for (var i = 0; i < detailArray.length; i++) {
      var element = detailArray[i];
      var detailType = element.getAttribute("data-type");

      if (theValue == detailType) {
        element.style.display = "block";
        element.classList.remove("detail-hide");
        element.classList.add("show");
      }
    }

    
  }

  //price and add meal

  function priceCal(event) {
    var showPrice = document.querySelectorAll(".total-price");
    var bookedNights = userObj.dayDifference;

    for (var i = 0; i < showPrice.length; i++) {
      var clickedEle = event.target;
      var elementPrice = clickedEle.getAttribute("data-price");
      var roomPrice = bookedNights * elementPrice;
    }

    var mealCheck = document.querySelectorAll(".meal");

    for (var i = 0; i < mealCheck.length; i++) {
      showPrice[i].innerText = "$ " + roomPrice;
      mealCheck[i].addEventListener("change", addMeal);

      function addMeal(event) {
        var checkedEle = event.target;
        var mealPrice = parseInt(checkedEle.value);
        var totalPrice = roomPrice + mealPrice*bookedNights;

        for (var j = 0; j < showPrice.length; j++) {
          if (checkedEle.checked == true) {
            showPrice[j].innerHTML = "$ " + totalPrice;
          } else {
            showPrice[j].innerHTML = "$ " + roomPrice;
          }
        }
      }
    }
  }
}


// close details

var closeDetail = document.querySelectorAll(".detail-close");

for (var i = 0; i < closeDetail.length; i++) {
  closeDetail[i].addEventListener("click", closeInfo);

  function closeInfo() {
    for (var i = 0; i < detailArray.length; i++) {
      var element = detailArray[i];
      element.style.display = "none";
      element.classList.add("detail-hide");
      element.classList.remove("show");
    }
  }
}
