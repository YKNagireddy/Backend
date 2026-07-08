import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("App running on port 5000");
});

export default app;