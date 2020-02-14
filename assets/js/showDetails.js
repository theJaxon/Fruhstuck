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

let storedRecipes = JSON.parse(localStorage.getItem("recipes"));
let allRecipes = storedRecipes.all
let selectedRecipe = allRecipes[selectedRecipe_id]

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

/********************************************************************************** */



class Comment {
    constructor(loginUser, comment) {
        this.User = loginUser
        this.comment = comment
    }
}
let stored_recipes_Comments = JSON.parse(localStorage.getItem("comments"));
let allComments = stored_recipes_Comments.all
let commentsArr = allComments[selectedRecipe_id]

let add_comment = document.getElementById("add-comment")
let commentInput = document.getElementById("comment_text")
let displayed_comments = document.getElementById("displayed_comments")

for (let i = 0; i < commentsArr.length; i++) {
    let first_comment = Object.values(commentsArr[i])
    displayed_comments.innerHTML += `<li><b>${first_comment[0]}</b>: ${first_comment[1]}</li>`
}

add_comment.onclick = (e) => {

    let loginUser = localStorage.getItem("loginUser")
    let commentText = commentInput.value
    let New_Comment = new Comment(loginUser, commentText)
    commentsArr.push(New_Comment)

    let last_comment = Object.values(commentsArr[commentsArr.length - 1])
    displayed_comments.innerHTML += `<li><b>${last_comment[0]}</b>: ${last_comment[1]}</li>`

    commentInput.value = ""
    localStorage.comments = JSON.stringify(stored_recipes_Comments)
}