// install cookie-parser
// npm i cookie-parser


// session  and cookie 

const { error } = require('console');
const expres = require('express');

const app= express();


// middleware


app.use(express.json());  // make json based data readable ->post and get (body)
app.use(express.urlencoded({extended:true}));   // url encoded data -> form data


app.get('/', function (req, res) {
    res.send("hello from / route");
}
);

app.get('/about', function (req, res) {
    res.send("hello from the /about route");
})

app.get('/profile',function(req,res){
    res.send("Not implemented");
})

app.listen(3000);


