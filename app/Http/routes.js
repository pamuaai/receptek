'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

//Route.on('/').render('main')
Route.get('/', 'RecipeController.main')




/*Route.on('/hello').render('hello')

Route.get('/narancs', function(req, res){
    res.send('Narancs')
})*/

// Route.get('/eper', 'EperController.eper')
// Route.get('/hello', 'EperController.hello')