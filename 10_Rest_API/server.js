const express = require('express');   
/*
loads express  framework


used for the 
- server creation
- routing
- middleware handling
*/
const compression = require('compression');


/*
original json - 500kb
compressed - 80kb

benfit 
-  faster frontend loading
- less bandwidth usage

*/
const axios = require('axios');


/*
used to call external apis

better than fetch 
- timeout support
- error handling
- clean syntax
- interceptors supports


*/

const NodeCache = require('node-cache');


/*
creates a RAM- based temporary storage for the data
- instead of calliong API repeatedly
   -  store the response
   - reuse many time
- huge performance boost

*/

const app = express();

const cache = new NodeCache({ stdTTL: 60 });


/*

create a cache object
- data stored for the 60 seconds
- automatically deleted after 60 seconds

- helps to reduce the number of API calls
- improves performance

*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

/*
automatically compresses all responses
improves the performance globally
*/


// reusable API handler
const fetchData = async (routeName) => {

    const cachedData = cache.get(routeName);

    if (cachedData) {
        return cachedData;
    }

    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${routeName}`,
        { timeout: 3000 }   // stopes the request if it takes more than 3 seconds
    );

    cache.set(routeName, response.data);   // stores the data in memory for 60 seconds

    return response.data;
};


// dynamic routes

app.get('/posts', async (req, res) => {
    try {
        const data = await fetchData('posts');
        res.json(data);
    } catch {
        res.status(500).json({ message: "Failed to fetch posts" });
    }
});

app.get('/comments', async (req, res) => {
    try {
        const data = await fetchData('comments');
        res.json(data);
    } catch {
        res.status(500).json({ message: "Failed to fetch comments" });
    }
});

app.get('/albums', async (req, res) => {
    try {
        const data = await fetchData('albums');
        res.json(data);
    } catch {
        res.status(500).json({ message: "Failed to fetch albums" });
    }
});

app.get('/photos', async (req, res) => {
    try {
        const data = await fetchData('photos');
        res.json(data);
    } catch {
        res.status(500).json({ message: "Failed to fetch photos" });
    }
});

app.get('/todos', async (req, res) => {
    try {
        const data = await fetchData('todos');
        res.json(data);
    } catch {
        res.status(500).json({ message: "Failed to fetch todos" });
    }
});

app.get('/users', async (req, res) => {
    try {
        const data = await fetchData('users');
        res.json(data);
    } catch {
        res.status(500).json({ message: "Failed to fetch users" });
    }
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});