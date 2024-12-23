const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

// app.get
// app.post
// app.get
// app.patch
// app.delete

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}..`));
  } catch (error) {
    console.log(error);
  }
};

start();
