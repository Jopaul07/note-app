
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
## Running
```
Up the server now.

$ sudo docker-compose up --buid
```


##API calls

Signing up user.
[POST request]

http://localhost:3000/signup 

Body[{email:"yourmail@mail.com"},{password:"yourpass"},{



## Authors

* **Jopaul J Nelluvely** - [Jopaul07](https://github.com/Jopaul07)

