import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async()=>{

    
try {
    await mongoose.connect(process.env.MDB_URI)
    console.log("dbconnected")
} catch (error) {
    console.error(error.message);
    
}
}
export default connectDB