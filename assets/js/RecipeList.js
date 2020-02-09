class RecipeList {

    listCon = {};

    add(recipe) {
        this.listCon[recipe.id] = recipe;
        console.log(this.listCon);
    }

    remove(id) {
        delete this.listCon[id];
        console.log(this.listCon);
    }

    update(id, obj) {
        this.listCon[id] = obj;
    }
}