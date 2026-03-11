import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://oshadhaw63:Legendsky63@cluster0.c6h62hs.mongodb.net/food-delivery=Cluster0").then (()=>console.log("DB connected"));
}