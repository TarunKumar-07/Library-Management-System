const express = require("express");
const app = express();
const port = 5000;
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api/user", userRoutes);
