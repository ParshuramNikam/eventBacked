import express from "express";
const router = express.Router();
import events from "../model/events.model.js";

router.get('/get-events/:user_id', async (req, res) => {
    try {
        const m1 = await events.find({ user_id: req.params.user_id });
          
        if (!m1) return res.send("Not Found").status(404);
        res.status(200).send(m1);
    } catch (error) {
        res.status(400).send({ status: "failed", error });
    }
});
 
router.post('/create-event', async (req, res) => {
    try {
        const { user_id, title, description, start, end, public_view } =req.body;

        const m1 = new events({
            user_id, title, description, start, end, public_view 
        });
        console.log("not saved", m1);
        await m1.save();
        console.log("saved")
        console.log(m1);
        res.send(m1);
    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "failed", error });
    }
});

router.delete('/delete-event/:_id', async (req, res) => {
    try {
        const m1 = await events.findOneAndDelete({ _id: req.params._id});
        if (!m1) return res.status(404).send('The event with the given ID was not found.');
        res.send({message:"deleted succesfully", deletedEvent: m1}).status(200);
    } catch (error) {
        res.status(400).send({ status: "failed", error });
    }
});

router.patch("/update-event/:_id", async(req,res)=>{
    try {
        const m1 = await events.findByIdAndUpdate(req.params._id, req.body, { useFindAndModify: false } );    
        if (!m1) return res.status(404).send({message: `Cannot update Event with _id=${req.params._id}. Maybe Event was not found!`});
        res.send({ message: "Event was updated successfully.", updatedEvent: m1 });
    } catch (error) {
        res.status(400).send({ status: "failed", error });
    }
})

export default router;


