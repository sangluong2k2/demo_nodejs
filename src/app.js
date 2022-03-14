import express from "express";
import productRouter from "./routes/lauphan";
import mongoose from "mongoose";
const app = express();

app.use(express.json())


app.use("/api", productRouter);

mongoose.connect("mongodb://localhost:27017/we16306")
    .then(() => console.log("connect db thanh cong"))

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
});