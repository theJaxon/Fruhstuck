document.getElementById("updateRecipe").addEventListener("click", updateRecipeModal);

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

let recipe_id = getUrlVars()["id"];

function updateRecipeModal(event) {
    event.preventDefault();

    if (recipe_id) {
        let recipe = recipes["all"][recipe_id];
        fillUpdateRecipeModal(recipe)
        $("#addRecipeModal").modal();
    }
}

function fillUpdateRecipeModal(recipe) {
    document.getElementById("recipeModalLabel").innerText = "Update Recipe";
    document.getElementById("add_recipe").style.display = "none";
    document.getElementById("update_recipe").style.display = "block";
    document.getElementById("update_recipe").addEventListener("click", updateRecipe);
    for (let i = 0; i < recipe.images.length; i++) {
        var div = document.createElement("div");
        div.classList.add("preview");
        div.innerHTML = "<img class='thumbnail preview-img' src='" + recipe.images[i] + "'/>";
        images_output.insertBefore(div, null);
    }

    title.value = recipe.title;
    ingredients.value = recipe.ingredients;
    directions.value = recipe.directions;
}


// update recipe in recipes list
function updateRecipe(event) {
    event.preventDefault();
    // check all recipe data are valid
    if (validateRecipe() && recipe_id) {
        let recipe = recipes["all"][recipe_id];
        if (all_images.length > 0)
            recipe.images = all_images;
        recipe.title = title.value;
        recipe.ingredients = ingredients.value;
        recipe.directions = directions.value;

        recipes.update(recipe_id, recipe);
        // save recipes list to local storage
        saveRecipes();
        // show updated recipe details
        show();
        // clear add recipe modal after add a new one
        cleanRecipeModal();
        // close recipe modal
        document.getElementById("closeRecipeModal").click();
    }
}

document.getElementById("deleteRecipe").addEventListener("click", deleteRecipe);

function deleteRecipe() {
    let confirmDelete = confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
        recipes.remove(recipe_id);
        saveRecipes();
        window.location.href = "/Fruhstuck";
    }
}