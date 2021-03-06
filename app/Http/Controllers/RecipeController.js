'use strict'

const Category = use('App/Model/Category')

class RecipeController {
    *main (req, res){

        const categories = yield Category.all()

        for(const category of categories){
            const topRecipes = yield category.recipes().limit(3).fetch()
            category.recipes = topRecipes
        }

        yield res.sendView('main', { categories: categories.toJSON() }) 
    }
}

module.exports = RecipeController
