const express = require('express');
let router = express.Router();

router.get("/user",(req,res)=>{
  res.send("User Information")
})

router.get("/newuser",(req,res)=>{
  res.send("New user added")
})

router.post("/createUser",(req,res)=>{
  res.send("Add new user");
})

router.route ('/:id')
.get((req,res)=>{
  res.send("Retrive value "+req.params.id);
})
.put((req,res)=>{
  res.send("update value: "+req.params.id);
})
.delete((req,res)=>{
  res.send("delete value: "+req.params.id);
})


const users = [{name:"Thiru"},{name:"Malai"},{name:"Vasan"}];  //MiddleWare concept

router.param('id',(req,res,next,id)=>{
  console.log(id);
  req.usery = users[id];
  next();
})

// router.get('/:id',(req,res)=>{
//   res.send("retrive value: "+req.params.id);
// })
// router.put('/:id',(req,res)=>{
//   res.send("update value: "+req.params.id);
// })

// router.delete('/:id',(req,res)=>{
//   res.send("delete value: "+req.params.id);
// })


module.exports = router;
