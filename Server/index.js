const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/todos");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ACCOUNT_PASSWORD}@cluster0.q7zsbbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task: task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  let done = false;
  await TodoModel.findById({ _id: id })
    .then((result) => {
      done = result.done;
    })
    .catch((err) => console.log(err));
  // console.log(done);

  await TodoModel.findByIdAndUpdate({ _id: id }, { done: done ? false : true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Listening");
});
