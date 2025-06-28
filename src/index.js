const express = require("express");
const cors = require("cors");
const schema = require("./schema.json");

const app = express();
app.use(cors());

app.get("/api/schema", (_, res) => {
  res.json(schema);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening on ${port}`));
