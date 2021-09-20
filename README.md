# Assignment-node
This is a RESTful CRUD functionality of a books library.
Perform post request at port 5000(i.e.localhost:5000/api/v1/login) to start a session of email.(i.e.{"email":"your_email"}
Until you are logged in you can perform GET,PUT,POST,DELETE operations using a particular ID of a given book.
If not logged in, you can only perform GET requests.
Peroform a get reques on port 5000(i.e.localhost:5000/api/v1/login) to logout and kill session.
Once logged out, you can only perform GET requests.

GET request on localhost:5000/api/v1/books - Displays details of all books in the directory.
GEt request on localhost:5000/api/v1/books/?id - Displays details of book with id:id.
Put request on localhost:5000/api/v1/books/?id with details of books in json :
{
        "title": "Unlocking Android: A Developer's Guide",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": {
            "$date": "2009-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "shortDescription": "",
        "status": "PUBLISH",
        "authors": "Robi Sen",
        "categories": [
            "Open Source",
            "Mobile"
        ]
    }
-Updates the details of book with id:id

POST request on localhost:5000/api/v1/books with details of books in json :
{
        "title": "Unlocking Android: A Developer's Guide",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": {
            "$date": "2009-04-01T00:00:00.000-0700" },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "shortDescription": "",
        "status": "PUBLISH",
        "authors": "Robi Sen",
        "categories": [
            "Open Source",
            "Mobile"
        ]
    }
    
    - Adds book to the list if no such book with id:isbn found in the directory.
    
   DELETE request on localhost:5000/api/v1/books/?id - Delets book with id:id if found or else handles the error.
   
Modules used are body-parser,express,express-session
