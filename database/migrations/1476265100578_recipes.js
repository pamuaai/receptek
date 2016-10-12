'use strict'

const Schema = use('Schema')

class RecipesSchema extends Schema {

  up () {
    this.create('recipes', (table) => {
        table.increments()

        
        table.string('name', 50)
        table.text('ingredients')
        table.text('instructions')
        table.integer('user_id').references('id').inTable('users')
        table.integer('category_id').references('id').inTable('categories')


      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }

}

module.exports = RecipesSchema
