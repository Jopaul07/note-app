# Client_service

    Client_service server is the client facing server that communicates with the client.It receives inputs in Json formats.
    It communicates with the other two servers and gathers required informations.

## Source_code

    `index.js` inside 'routes' folder contains all the url specific actions and communication to other servers is controlled here.
    It does not contain any database calls or authentication procedures.
    It is responsible for communication between client(user) and other servers. 