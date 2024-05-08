import { mongoose } from "mongoose";

/*
    Here we are making a connection to the mongoDB. W
    e are in development mode so we may connect disconnect many times 
    so we need to check if the connection exist or not.
    If the connection exist we return nothing, otherwise we create a new connection and
    update the connection object with the newly added connection state.
*/

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection!");
      return;
    }
    //creating a new connection.
    const db = await mongoose.connect(process.env.MONGO);
    //update the connection object with the newly added connection state.
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
