const express = require("express");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const swaggerDoc = yaml.load("./swagger.yaml");

// express app

const app = express();
app.use(express.json());
app.use("./docs,", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("./health", (_req, res) => {
  res.status(200).json({
    health: "ok",
  });
});

app.listen(4000, () => {
  console.log("server is listening at port 4000");
});

app.get("./articles", (req, res) => {
  console.log("UEl", req.url);
  console.log("query params", req.query);

  res.status(200).json({ message: "hello swagger" });
});
