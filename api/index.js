const express = require ("express");
const cors = require ("cors");
const dotenv = require ("dotenv");
const connectDB = require("./database/database.js");
const UserDAO = require("./dao/UserDAO.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.get ("/", (req, res) => {
    res.send("Welcome to the LiverLab3D API!")
});

const userDAO = new UserDAO();
app.get("/api/v1/users/", (req, res) => userDAO.getAll(req, res));  
app.post("/api/v1/users/", (req, res) => userDAO.create(req, res))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

connectDB();