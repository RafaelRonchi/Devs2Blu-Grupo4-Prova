filterCards("all");

function filterCards(value) {
  let cards = document.getElementsByClassName("recipe-card");
  if (value == "all") value = "";
  for (let i = 0; i < cards.length; i++) {
    removeClass(cards[i], "show");
    if (cards[i].className.indexOf(value) > -1) addClass(cards[i], "show");
  }
}

function addClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
  }
}

function removeClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let filterContent = document.getElementById("filter-content");
let filterButtons = filterContent.getElementsByClassName("filter-btn");
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}