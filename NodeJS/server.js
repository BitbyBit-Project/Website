const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app=express();
app.use(bodyParser.json());
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var conn = mysql.createConnection({
  host: "nursing-vr.cbogay316a3k.us-west-2.rds.amazonaws.com", // ip address of server running mysql
  user: "admin", // user name to your mysql database
  password: "nursing1!", // corresponding password
  database: "NursingVR" // use the specified database
});
 
// make to connection to the database.
conn.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful');
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
    const query = buildQuery(tableName, columns, values);
    mutation.mutate(query);
    res.send('Query submitted');
  });

app.listen(3000,()=>{
  console.log("Server is running on Port 3000");
})







