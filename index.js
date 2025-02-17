const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connection = require("./database/db.js");
connection();

const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// app.use("/");

// app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Blog-MERN API</h1><ol> </ol>");
});

// our routes
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// default, catch-all route
app.get("/*", (req, res) => {
  res.redirect("/");
});

//Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("There was an issue on the server, Try Again!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
