const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req, res) => {
  // console.log("Hi");
  // res.status(500).send("Error occured")
  // res.status(200).send({error:"error occured"});
  // res.json({express:"Learning express"});
  // res.send(400);
  res.render("index",{text:"World"});
});

const userRoute = require('./routes/user');

app.use('/user',userRoute);

app.listen(3000);
