
#  Note-Application

A simple note taking application. Users can signup and login to view their data.
The entire setup is done as a micro service inside docker.

Roles of all three servers explained.

Client_service [server-1] : Client facing server. Receives input in json format from the end user. This server is responsible for making necessary calls to the other two servers.

User_service [server-2] : Perform user authentication[Basic Auth] for each calls from client. Completely opaque to the end client. Returns user profile details only.
 
Note_service [server-3]: Performs notes operations[creation,modification,deletion and retrieval] . Returns the notes data in JSON format.

Mongodb is used in storing details.


## Getting Started

Clone the project from Git-Hub.

### git clone https://github.com/Jopaul07/note-app.git

### Prerequisites

First Check the Docker Version installed on your device.
```
$ docker version

$ docker-compose --version
```
### Running

```
Up the server now.

$ sudo docker-compose up --buid

```

### Signing up user:

url: http://localhost:3000/signup 

Request type: `POST` 

Body: `application/json`
```
{
 "email":"yourmail@mail.com",
 "password":"yourpass",
 "firstName":"fname",
 "lastName":"lname", 
 "address":"address"
}
```
### Logging in:

url: `http://localhost:3000/login`

Request type: `POST`

Authorization: `Basic Auth` pass `Username : email` and `Password : password`

Pass `Basic base64encode(username:password)` as the value of `Authorization` header.

### View all Notes of the User concerned.

url: `http://localhost:3000/notes/all`

Request Type: `GET`

Authorization: `Type : Basic Auth` and pass `Username : email` and `Password : password`

### Add a new note.

url: `http://localhost:3000/notes/`

Request Type: `POST`

Authorization: `Type : Basic Auth` and pass `Username : email` and `Password : password`

Body: `application/json`
```
{
 "noteText":"your note here"
}
```
### Edit an existing note.

url: `http://localhost:3000/notes/`

Request Type: `PUT`

Authorization: `Type : Basic Auth` and pass `Username : email` and `Password : password`

Body: `application/json`
```
{
 "noteText":"Your edited note here",
 "noteId":"Database Id of note to be edited"
}
```
### Delete an existing note.

url: `http://localhost:3000/notes/`

Request Type: `DELETE`

Authorization: `Type : Basic Auth` and pass `Username : email` and `Password : password`


Body: `application/json`
```
{
 "noteId":"Database Id of note to be deleted"
}
```


## Authors

* **Jopaul J Nelluvely** - [Jopaul07](https://github.com/Jopaul07)

