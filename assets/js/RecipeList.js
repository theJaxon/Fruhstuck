class RecipeList {

    all = {};

    add(recipe) {
        this.all[recipe.id] = recipe;
        // console.log(this.all);
    }

    remove(id) {
        delete this.all[id];
        // console.log(this.all);
    }

    update(id, recipe) {
        this.all[id] = recipe;
    }
}
/****************************************************************** */
class CommentList {
    all = {};

    add(recipe) {
        this.all[recipe.id] = [];
    }
}