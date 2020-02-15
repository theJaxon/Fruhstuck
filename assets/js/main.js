// display all recipes from local storage when open the home page
let title = document.getElementById("title");
let ingredients = document.getElementById("ingredients");
let directions = document.getElementById("directions");

let images = document.getElementById("images");
let images_output = document.getElementById("resultImgs");
let all_images = [];
let recipes_div = document.getElementById("recipes");
let recipes = new RecipeList();
document.getElementById("add_recipe").addEventListener("click", addRecipe);
images.addEventListener("change", previewImages);
let id = 1;

// add new recipe to recipes list
function addRecipe(event) {
    event.preventDefault();
    // check all recipe data are valid
    if (validateRecipe()) {
        let recipe = new Recipe(id, all_images, title.value, ingredients.value,directions.value);

        recipes.add(recipe);
        // save recipes list to local storage
        saveRecipes();
        // view the new recipe in the html page
        appendRecipe(recipe);
        // clear add recipe modal after add a new one
        cleanRecipeModal();
        // close recipe modal
        document.getElementById("closeRecipeModal").click();
    }
}

function validateRecipe() {
    let valid = true;

    // validate images
    if (images_output.innerHTML === "") {
        images_output.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        images_output.nextElementSibling.style.display = "none";
    }

    // validate title
    if (title.value === "") {
        title.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        title.nextElementSibling.style.display = "none";
    }

    // validate ingredients
    if (ingredients.value === "") {
        ingredients.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        ingredients.nextElementSibling.style.display = "none";
    }

    // validate directions
    if (directions.value === "") {
        directions.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        directions.nextElementSibling.style.display = "none";

    }

    return valid;
}

function previewImages(event) {
    images_output.innerHTML = "";
    var files = event.target.files; //FileList object
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        //Only pics
        if (file.type.match('image')) {
            var picReader = new FileReader();
            picReader.addEventListener("load", readerLoad);

            function readerLoad(event) {
                var picFile = event.target;
                var div = document.createElement("div");
                div.classList.add("preview");
                div.innerHTML = "<img class='thumbnail preview-img' src='" + picFile.result + "'" +
                    "title='" + picFile.name + "'/>";
                images_output.insertBefore(div, null);
                all_images.push(picFile.result);
            }

            //Read the image
            picReader.readAsDataURL(file);
        }

    }
}

function cleanRecipeModal() {
    title.value = "";
    ingredients.value = "";
    directions.value = "";

    images.value = "";
    images_output.innerHTML = "";
}

// append recipe to the html page
function appendRecipe(recipe) {
    if(recipes_div){
        let hidden_recipes = recipes_div.getElementsByClassName("recipe");
        if (hidden_recipes.length > 0) {
            let recipeCopy = hidden_recipes[0].cloneNode(true);
            recipeCopy.removeAttribute("hidden");
            recipeCopy.getElementsByTagName("img")[0].src = recipe.images[0];
            recipeCopy.getElementsByTagName("h5")[0].innerHTML = recipe.title;
            recipeCopy.getElementsByClassName("recipeButton")[0].href = "details.html?id=" + recipe.id;
            recipeCopy.setAttribute("recipe_id", recipe.id);
            recipes_div.prepend(recipeCopy);
        }

    }
}

function saveRecipes() {
    localStorage.setItem("recipes", JSON.stringify({all: recipes.all}));
}





let stored_recipes = JSON.parse(localStorage.getItem("recipes"));
if (stored_recipes) {
    stored_recipes = stored_recipes["all"];
    recipes.all = stored_recipes;
    for (let recipe in stored_recipes) {
        appendRecipe(stored_recipes[recipe]);
        id = recipe;
    }
}

if(authUser.getAuthUser()){
    document.getElementById('loginBtn').style.display="none";
    document.getElementById('signBtn').style.display="none";
}else{
    document.getElementById('logoutBtn').style.display="none";
    document.getElementById('add-recipe-modal').style.display="none";

}

