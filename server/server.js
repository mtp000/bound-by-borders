import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.use(express.json());



// API routes example
app.get('/api/example', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Send all other requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
