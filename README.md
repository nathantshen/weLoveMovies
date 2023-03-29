# [We Love Movies](https://welovemovies-frontend-15db.onrender.com/).
### [WeLoveMovies Backend](https://welovemovies-wqfr.onrender.com/movies) 
### (See [repo](https://github.com/nathantshen/we-love-movie-front-end) for more info on the frontend) 

> This is the backend for the project, which was created with a database and RESTful API with CRUD operations allowing users to access data about the latest movies, theaters, and reviews.

### Available Routes
- /movies
- /movies?is_showing=true
- /movies/:movieId
- /movies/:movieId/theaters
- /movies/:movieId/reviews
- /theaters
- /reviews [PUT/DELETE]

### Objectives
- Install and use common middleware packages
- Receive requests through routes
- Run tests from the command line
- Access relevant information through route and query parameters
- Create an error handler for the case where a route doesn't exist
- Build an API following RESTful design principles
- Create and customize a knexfile.js file
- Create a connection to your database with Knex
- Write database queries to complete CRUD routes in an Express server
- Return joined and nested data with Knex
- Write database migrations using Knex's migration tool
- Deploy your backend server to a cloud service

### Tasks 
- Your app.js file and server.js file are correctly configured, with your app.js file exporting the application created from Express.
- You use the cors package so that requests from the frontend can correctly reach the backend.
- If a request is made to a route that doesn't exist, the server returns a 404 error.
- If a request is made to a route that exists but the HTTP method is wrong, the server returns a 405 error.
- All of your routes respond with the appropriate status code and use a data key in the response.
