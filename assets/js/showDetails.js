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

let intervalID = null;

function show() {
    if (intervalID) {
        clearInterval(intervalID);
    }

    let selectedRecipe_id = getUrlVars().id
    let storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    let allRecipes = storedRecipes.all
    let selectedRecipe = allRecipes[selectedRecipe_id]
    let imgArr = selectedRecipe["images"]
    let current_img = imgArr[0];
    recipe_imges.src = current_img;

    intervalID = setInterval(imgSide, 2500)
    var i = 0;

    function imgSide() {
        if (i == imgArr.length) {
            i = 0
        }
        current_img = imgArr[i]
        recipe_imges.src = current_img
        i++
    }


    recipe_title.innerHTML = selectedRecipe["title"]
    Ingredients.innerHTML = selectedRecipe["ingredients"]
    Directions.innerHTML = selectedRecipe["directions"]

}

show();