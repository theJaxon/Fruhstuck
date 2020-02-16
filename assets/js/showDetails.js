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
let selectedRecipe_id;

function show() {
    if (intervalID) {
        clearInterval(intervalID);
    }

    selectedRecipe_id = getUrlVars().id
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


/********************************************************************************** */


class Comment {
    constructor(loginUser, comment) {
        this.User = loginUser
        this.comment = comment
    }
}
let commentsArr = [];

let displayed_comments = document.getElementById("displayed_comments")
let stored_recipes_Comments = JSON.parse(localStorage.getItem("comments"));
if (stored_recipes_Comments) {
    let allComments = stored_recipes_Comments.all
    commentsArr = allComments[selectedRecipe_id]

    for (let i = 0; i < commentsArr.length; i++) {
        let first_comment = Object.values(commentsArr[i])
        displayed_comments.innerHTML += `${first_comment[0]}: ${first_comment[1]}` + "\n"
    }
}


let add_comment = document.getElementById("add-comment")
let commentInput = document.getElementById("comment_text")


add_comment.onclick = (e) => {
    e.preventDefault();
    let loginUser = localStorage.getItem("loginUser")
    if (loginUser == null) {
        alert("You need to be logged to comment")
        return null
    }
    let commentText = commentInput.value
    if (commentText == "") {
        return null
    }
    let New_Comment = new Comment(loginUser, commentText)
    commentsArr.push(New_Comment)

    let last_comment = Object.values(commentsArr[commentsArr.length - 1])
    displayed_comments.innerHTML += `${last_comment[0]}: ${last_comment[1]}` + "\n"

    commentInput.value = ""
    localStorage.comments = JSON.stringify(stored_recipes_Comments)
};
