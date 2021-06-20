var scrollEnded;
var wrapper = document.querySelector(".all-wrapper");

var pageChoiceObj = {
  currentPage: "",
};

var btnArray = document.querySelectorAll(".next-step");

for (var i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function (e) {
    var dataTargetElement = e.target.getAttribute("data-target");
    var pageElement = wrapper.querySelector(dataTargetElement);

    pageChoiceObj.currentPage = pageElement;

   

    pageElement.scrollIntoView({
      behavior: "smooth",
    });
  });
}

wrapper.addEventListener("scroll", function () {
  clearTimeout(scrollEnded);
  scrollEnded = setTimeout(function () {}, 500);
});



//details to reserve

var detailArray = document.querySelectorAll(".list-detail");
var reserveBtn = document.querySelectorAll(".btn-reserve");
for (var i = 0; i < reserveBtn.length; i++) {
  reserveBtn[i].addEventListener("click", closePage);
  function closePage() {
    for (var i = 0; i < detailArray.length; i++) {
      var element = detailArray[i];
      element.style.display = "none";
      element.classList.add("detail-hide");
      element.classList.remove("show");
    }
  }
}
