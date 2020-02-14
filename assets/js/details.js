document.getElementById("updateRecipe").addEventListener("click", updateRecipe);

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function updateRecipe(event) {
    event.preventDefault();
    let recipe_id = getUrlVars()["id"];
    if (recipe_id) {
        let recipe=recipes["all"][recipe_id];
        console.log(recipe)
        fillUpdateRecipe(recipe)
        $("#addRecipeModal").modal();
    }
}

function fillUpdateRecipe(recipe) {
    for(let i=0;i<recipe.images.length;i++){
        var div = document.createElement("div");
        div.classList.add("preview");
        div.innerHTML = "<img class='thumbnail preview-img' src='" + recipe.images[i] + "'/>";
        images_output.insertBefore(div, null);
    }

    title.value = recipe.title;
    ingredients.value = recipe.ingredients;
    directions.value = recipe.directions;
}