const express = require("express");
const createHttpError = require("http-errors");
const app = express();
require("dotenv").config();
require("./src/Config/mongodb.config");
const dataRouter = require("./src/Routers/product.route");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  res.send("Hello sir!");
});

app.use("/api", dataRouter);

app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route is not found!"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error!",
    },
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
