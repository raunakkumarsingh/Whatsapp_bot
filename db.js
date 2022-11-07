const mongoose =require('mongoose');
// const mongoURI="mongodb+srv://root:toor@cluster0.vh2d3os.mongodb.net/whatapp"
const mongoURI="mongodb+srv://root:root@cluster0.ezodcuu.mongodb.net/whatapp"



const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}
module.exports =connectToMongo;