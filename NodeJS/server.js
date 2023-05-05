const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 3000;

const app=express();
app.use(bodyParser.json());
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var conn = mysql.createConnection({
  host: "nursing-vr.cbogay316a3k.us-west-2.rds.amazonaws.com", // ip address of server running mysql
  user: "admin", // username to your mysql database
  password: "nursing1!", // corresponding password
  database: "NursingVR" // use the specified database
});
 
// make to connection to the database.
conn.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('Connection successful.');
});


app.get('/',(req,res)=>{
  res.json('OK');
})

app.post('/submit-query', (req, res) => {
    const tableName = "cardiovascular_exam_instuctor_answers";
    const columns = ["RSB_2IS", "LSB_2IS", "LSB_3IS", "LSB_4IS", "LSB_5IS"];
    const values = [
      req.body.set4,
      req.body.set5,
      req.body.set6,
      req.body.set7,
      req.body.set8,
    ];
    const query = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${values.map((value) => `"${value}"`).join(", ")});`;
    console.log(query);
    conn.query(query, function (err, result) {
      if (err) throw err;
      console.log("Query executed successfully.");
      res.send("Query received and executed successfully.");
    });
  });


app.listen(3000,()=>{
  console.log("Server listening at http://localhost:3000");
})

