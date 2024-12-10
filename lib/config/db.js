import { NextResponse } from "next/server";

const mongoose = require ("mongoose")

export const ConnectDb = async() => {
    await mongoose.connect("mongodb+srv://hridayansh018:hriduh018@cluster0.pqol6.mongodb.net/todo-app")
    console.log("DB Connected");
    return NextResponse.json({msg:"<<<<<<<<--------db connected-------->>>>>>>>"});
}