install npm init
npm i express nodemon
"scripts": {
"start": "nodemon app.js"
},
npm start

boiler plate of express

<!-- Routes -->

app.get("/",(req,res)=>{
res.send("homr route").status(400)
})
req is something we want server to do
res is something server gave to us

<!-- middlewares  -->

functions which run whever specific route get hit / or run always before every routr when only function given
app.use("/post",(req,res)=>{
console.log("post function)
})
run before every route
app.use(auth)

<!-- mongo DB -->

one huge object that stores all data so that you dont need tabels or relations

<!-- mongoose -->

npm i mongoose
to connect mongo db server
create use on mongoDB atlas , require mongoose
mongoose
.connect(process.env.DB_CONNECTION)
.then(() => {
console.log("Connected to the database");
})
.catch((error) => {
console.error("Error connecting to the database:", error);
});

  <!-- .env -->

npm i dotenv
create file .env
inside that save mongoDB with its key and password as DB_CONNECTION

  <!-- DB  -->

require("dotenv/config")
and process.env.DB_CONNECTION

<!-- terminal -->

Connected to DB!
Listening at PORT

<!-- Router -->

we can create Router Folder to handle all the routes
routes > post.js
const router = require("express").Router()

router.get("/",(req,res)=>
res.send("route")
)

module.exports = router

<!-- accees route in app  -->

const postRoute = require("./routes/posts")
middleware to use post route in app
app.use("/posts",postRoute )

<!-- store data in mongo -->

to create the data we need model which have schema
schema is how the object look like details of object in dev world
model is a cluster  
models > Post.js
