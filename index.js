import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';

const app = express();            //Stores the express function in the variable "app"

//MiddleWare for parsing the json request to body
app.use(bodyParser.json());         //for using body-parser

dotenv.config();     //dotenv.config() command is used in JavaScript (typically in Node.jsapplications) to load environment variables from a .env file into the process.env object
const PORT = process.env.PORT || 8000;  // stores the port value given in env || if first port is not available then run in next port

const MONGOURL = process.env.MONGO_URL;

app.use('/api/user',router);         //creating api

mongoose.connect(MONGOURL).then(()=>{                  //then() for message after connect to mongoose
  console.log("Database connected successfully");
  app.listen(PORT,()=>{
    console.log(`Server is running in the port ${PORT}`);
  })
})   
                                                      //For connecting Moongoose functionality
.catch((err)=>{
  console.log("Error occured");         //preventing app crash
});