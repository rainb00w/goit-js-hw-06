const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsUl = document.querySelector("#ingredients");

const ingridientsLi = ingredients.map((item) => {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  liItem.classList.add("item");
  return liItem;
});

ingridientsUl.append(...ingridientsLi);

console.log(ingridientsUl);
