1. create a simple http server

```javascript
const http =require ('http');


const server = http.createServer((req,res)=>{
    res.write("hello ji ");
    res.end();

});

server.listen(3000);


```


2. Event emitter 
```javascript

const eventEmitter =  require("events");
const emitter= new eventEmitter();

emitter.on("greet",(name)=>{
    console.log(`hello ${name}`);
});

emitter.emit("greet","Priyanshu");

```



4. Promise :

```javascript

const promise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

promise
.then(data => console.log(data))
.catch(err => console.log(err));


```


5 Async/await api call

```javascript

const axios = require("axios");

async function getUsers() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

getUsers();


```




