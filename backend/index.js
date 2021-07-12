const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app=express();
const pinRoute=require("./routs/pins");
const userRoute=require("./routs/users");

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
.then(()=>{
    console.log("MongoDB connected!");
})
.catch((err)=>console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(8800,()=>{
    console.log("Backend is running!");
})