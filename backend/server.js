const express =  require('express');
const mongoose = require ('mongoose');
const usersRoute = require('./api/users')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

require('dotenv/config');
//middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())
//import routes for api

app.use('/users',usersRoute);

//Routes

app.get('/',(req,res)=>{
    res.send("This is the root for Mom's Recipe App");
});
let URI = process.env.DB_CONNECTION;
mongoose.connect(URI,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('connected to DB');
})

let PORT = process.env.PORT || 3000;

app.listen(PORT);