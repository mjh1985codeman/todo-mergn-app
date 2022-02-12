import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//Server Init.
async function initServer() {
  const app = express();
  app.use(cors());
  //using dotenv config method to utilize our mongoDB paramaters to connect to our mongoDB database.
  dotenv.config();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Server started Successfully");
  });
  const PORT = process.env.PORT || 5000;
  try {
    //Attempts to connect our server with our database using mongoose
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB at port ${PORT}`);
    //this will catch and show any error that takes place if our DB : Server connection fails.
  } catch (error) {
    console.log("**SERVER DB CONNECT ERROR**...", error);
  }
  app.listen(PORT, () =>
    console.log(`Express server is running on port ${PORT}`)
  );
}

initServer();
