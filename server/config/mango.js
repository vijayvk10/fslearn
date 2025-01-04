const mongoose = require('mongoose')

const connectdb = async ()=>
{
    mongoose.connection.on('connected',()=>{
        console.log("Db connected");
    })
    await mongoose.connect(`${process.env.MONGO}/web`);
}
module.exports = connectdb;