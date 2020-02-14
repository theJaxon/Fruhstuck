let recipe_imges = document.getElementById("recipe_img")
let recipe_title = document.getElementById("recipe_title")
let Ingredients = document.getElementById("Ingredients")
let Directions = document.getElementById("Directions")


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

let selectedRecipe_id = getUrlVars().id

console.log(selectedRecipe_id);

let storedRecipes = JSON.parse(localStorage.getItem("recipes"));

console.log(storedRecipes);

let allRecipes = storedRecipes.all

console.log(allRecipes);

let selectedRecipe = allRecipes[selectedRecipe_id]

console.log(selectedRecipe);

let imgArr = selectedRecipe["images"]
let current_img = imgArr[0]
recipe_imges.src = current_img

setInterval(imgSide, 1000)
var i = 0
function imgSide() {
    if (i == imgArr.length) { i = 0 }
    current_img = imgArr[i]
    recipe_imges.src = current_img
    i++
}


recipe_title.innerHTML = selectedRecipe["title"]
Ingredients.innerHTML = selectedRecipe["details"]
Directions.innerHTML