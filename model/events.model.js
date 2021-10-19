import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user_id:{
        type:Number,
        required: true,
     },
    description:{
        type:String,
        required: true,
    },
    public_view:{
        type:Boolean,
        default:false,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '262800m' }, // 6months = 262800 minutes
    }
})

const Event = mongoose.model('Event', eventSchema);

export default Event;