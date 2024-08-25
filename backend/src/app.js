const express = require("express");
const app = express();
const port = 5000;
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const memberRoutes = require("./routes/memberRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/member", memberRoutes);
