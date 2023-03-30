const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");
const Router = require("./routes/routes.js");

const app = express();

app.use(express.json());

app.use(cors());

async function connectDB() {
  try {
    await db.authenticate();
    console.log("DB Berhasil Terhubung");
  } catch (error) {
    console.error("Terdapat masalah pada koneksi:", error);
  }
}

connectDB();

app.use(Router);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
