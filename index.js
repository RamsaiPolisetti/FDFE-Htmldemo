const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("welcome to React with express framework");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});