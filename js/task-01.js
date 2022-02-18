const length = document.querySelector("#categories");
console.log("Number of categories:", length.children.length);

const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  console.log("Category :", item.firstElementChild.textContent);
  console.log("Elements:", item.children[1].children.length);
});
