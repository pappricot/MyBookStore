# MyBookStore Project

An app created using JS React that allows users to select and categorize book as you have read, are currently reading, or want to read.
The app fetchs data from BookAPI.js, which contains methods that are required to perform backend operations:
###`getAll()` 
* returns a Promise which resolves to a JSON object containing a collection of book objects. This collection represents the bookes that are currently in the app.
### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.


## Prerequisites

* [`npm`](https://www.npmjs.com/)

## To Run the App:

* Clone or download the repo.
* Open a terminal in project directory
* Run `npm install` (It might take some time to install the required dependencies)
* Once all the dependencies are installed use command `npm start` to run the local server.
* App can be accessed at `localhost:3000`

