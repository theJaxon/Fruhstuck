class RecipeList {

    all = {};

    add(recipe) {
        this.all[recipe.id] = recipe;
        // console.log(this.all);
    }

    remove(id) {
        delete this.all[id];
    }

    update(id, recipe) {
        this.all[id] = recipe;
    }
}