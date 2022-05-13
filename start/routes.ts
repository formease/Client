/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.get('/dashboard', 'DashboardController.index')
  Route.get('/dashboard/:formid', 'DashboardController.user')
})
Route.post('/createForm', 'CreatesController.index')
Route.post('/deleteForm', 'CreatesController.delete')

// Recieve data from form
Route.post('/f/:formid', 'FormsController.index')

// API
Route.get('/api/key', 'ApisController.auth')
Route.post('/api/client', 'ApisController.clientAuth')

Route.get('auth', async ({ view }) => {
  return view.render('auth')
})
