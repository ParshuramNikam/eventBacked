import mongoose from 'mongoose';

const dbConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/EventBackend', {
        useNewUrlParser: true,
    }).then(()=>{
        console.log("mongoose connected")
    }).catch((err)=>{
        console.log(err)
    })
}

export default dbConnection;

