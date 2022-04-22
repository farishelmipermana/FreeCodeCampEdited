// // use the .env file to configure the app
// app.get("/json", function(req, res) {
//     var jsonResponse = {"message": "Hello json"};
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         jsonResponse.message = jsonResponse.message.toUpperCase()
//     }
//     res.json(jsonResponse);
// });

// // mount the logger middleware here
// app.use(function(req, res, next) {
//     console.log(req.method + " " + req.path + " - " + req.ip);
//     next();
// });

// // chain the middleware. A time server
// function getTheCurrentTimeString() {
//     return new Date().toString();
// }

// app.get("/now", function(req, res, next) {
//     req.time = getTheCurrentTimeString();
//     next();
// }, function(req, res) {
//     res.json({time: req.time});
// });

// // chain the middleware. A time server
// function getTheCurrentTimeString() {
//     return new Date().toString();
// }

// app.get("/now", (req, res, next) => {
//     req.time = getTheCurrentTimeString();
//     next();
// }, (req, res) => {
//     res.json({time: req.time});
// });

// // get input from client - route parameters
// app.get("/:word/echo", (req, res) => {
//     res.json({echo: req.params.word});
// });

// // get input from client - query parameters
// app.get("/name", (req, res) => {
//     res.json({name: req.query.first + " " + req.query.last});
// });

//  mount the logger middleware here
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// meet the node console
bGround.log("Hello World");
console.log("Hello World");

// serve an HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.post('/name', bodyParser.urlencoded({extended: false}),(request, response, next) => {
    console.log(request);
});

let people = {
    'alice': {name : 'Alice', age : 21},
    'bob': {name : 'Bob', age : 22},
    'charlie': {name : 'Charlie', age : 23}
}
