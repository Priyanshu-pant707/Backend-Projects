import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());


app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "Running",
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});