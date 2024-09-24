import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://vedantvb17:miuslpGCCGWXAZZP@cluster0.nlvvh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 


//mongodb+srv://vedantvb17:miuslpGCCGWXAZZP@cluster0.nlvvh.mongodb.net/?