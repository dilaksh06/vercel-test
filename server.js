import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("✅ API Working Successfully on Vercel!");
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "👋 Hello from Vercel!" });
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});