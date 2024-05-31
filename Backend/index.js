import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import JusticeModel from './models/Justice.js'
const port = process.env.PORT || 3001;


const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Justice");

app.post('/appointment',async(req,res)=>{
    // JusticeModel.create(req.body)
    // .then(Registrations => res.json(Registrations))
    // .catch(err=> res.json(err))

    const { email, number } = req.body;

    try {
        // Check if the email or number already exists in the database
        const existingUser = await JusticeModel.findOne({
            $or: [{ email: email }, { number: number }]
        });

        if (existingUser) {
            return res.status(400).json({ error: "Email or number already exists" });
        }

        // If not, create a new record
        const newRegistration = await JusticeModel.create(req.body);
        res.json(newRegistration);
    } catch (err) {
        res.status(500).json(err);
    }

})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
