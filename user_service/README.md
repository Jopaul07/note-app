# User_service

    User_service server deals with user_service operations that includes making necessary database calls for signing up the user.
    It also authenticates the user  for each request user makes and operations on notes_service server are only initiated after a positive response from this server is recieved in client_service server.
# Routes
    `index.js` inside 'routes' folder contains the urls for this server which includes database operations like 'new user registration'. 
    It also performs user authentication and sends appropriate response to client_service server.

# Database models
     `users.js` in `models` folder contains the database schema for user model and user Profile model.
    