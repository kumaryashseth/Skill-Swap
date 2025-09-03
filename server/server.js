const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(cors());


connectDB();


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/swaps", require("./routes/swapRoutes"));

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
