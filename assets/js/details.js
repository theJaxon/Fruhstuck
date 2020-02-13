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

        $("#updateRecipeModal").modal();
    }
}