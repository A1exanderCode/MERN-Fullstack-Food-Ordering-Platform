import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to MongoDB database."));

// Create a new express server and assign it to a variable app
// Think of app as server's main controller.
const app = express();
// app.use() tells Express to register middleware
// app.use(express.json()); registers middleware that parses incoming JSON request bodies.
// Automatically convert the body of any request to the server to JSON, so we don't need to do it ourselves for every request
app.use(express.json());
// We could define endpoint
app.use(cors());

// We want this function to handle a given request
// app.get() means: When someone sends an HTTP GET request to a specific path, run this function.
// app.get() registers a route handler for GET requests to the specified path. The second argument is a callback function that will be called when a request is made to that path. The callback function takes two arguments: req (the request object) and res (the response object). In this case, we are sending a JSON response with a message "Hello!" when a GET request is made to the "/api/test" endpoint.
app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello!" });
});

// Start the server and listen on port 15000. When the server is ready, log a message to the console.
app.listen(15000, () => {
    console.log("Server started on localhost 15000");
});