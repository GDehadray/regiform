//import modules
//require() function used to import the modules
let express = require("express");
let mongodb = require("mongodb");
let cors = require("cors");
let bodyparser = require("body-parser");


//create the rest object
//master object
//master object used to develop the rest apis
//where "app"(master object) object used to develop the rest apis
let app = express();


//enable the ports communication   
app.use(cors());


//create the client
//mongodb follows the client server architecture
//in order to connect to "moongodb" we must create "client"
//where "nareshIT" is the client
let nareshIT = mongodb.MongoClient;


//set the communication language across the application
app.use(bodyparser.json());
//read the extended parameters
app.use(bodyparser.urlencoded({extended:false}));


//create the rest api
app.post("/registration",(req,res)=>{
    let record = {
        "fname":req.body.fname,
        "lname":req.body.lname,
        "email":req.body.email,
        "dob":req.body.dob,
        "gender":req.body.gender,
        "languages":req.body.languages,
        "country":req.body.country
    };

    //connect to database
    nareshIT.connect("mongodb://localhost:27017/regiform",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employee").insertOne(record,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({registration:"success"});
                }
            });
        }
    });

    
});

//create the get request
app.get("/allEmployees",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/regiform",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employee").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
    



//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");