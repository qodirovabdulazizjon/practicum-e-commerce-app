import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async() => {
  const connecting = await mongoose.connect(process.env.DB_URL)
  console.log('MongoDB connected to: ' + connecting.connection.host)
}

export default connectDB