import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://95.216.252.180:27017");
    console.log("Connected mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
