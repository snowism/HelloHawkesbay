
//js Hint done


var addGuest = document.querySelectorAll(".fa-plus-circle");

for (var i = 0; i < addGuest.length; i++) {
  addGuest[i].addEventListener("click", onAddClicked);
}

function onAddClicked() {
  var guestNum = document.querySelector(".user-guest");

  var currentNumber = parseInt(guestNum.innerText);
  currentNumber = currentNumber + 1;
  guestNum.innerText = currentNumber;

  var travellers = document.querySelector(".pax");
  var finalNum = currentNumber;
  travellers.innerHTML = finalNum + "pp";
}



var removeGuest = document.querySelectorAll(".fa-minus-circle");
for (var i = 0; i < removeGuest.length; i++) {
  removeGuest[i].addEventListener("click", onCancleClicked);
}
function onCancleClicked() {
  var guestNum = document.querySelector(".user-guest");
  var currentNumber = parseInt(guestNum.innerText);
  currentNumber = currentNumber - 1;
  guestNum.innerText = Math.max(0, currentNumber);

  var travellers = document.querySelector(".pax");
  var finalNum = currentNumber;
  travellers.innerHTML = finalNum + "pp";
}

