const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectDB();



app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/swaps", require("./routes/swapRoutes"));

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
