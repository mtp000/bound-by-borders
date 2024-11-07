import express from 'express';
import path, {dirname} from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

//PROD: construct path to build folder in ES modules
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

// PROD: Serve static files from the dist directory
app.use(express.static(path.join(_dirname, 'phaser-react/dist')));



let gameStartCounter = 0;

// API routes example
app.get('/api/example', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Route to get the current counter value
app.get('/api/game-start-counter', (req, res) => {
    res.json({ counter: gameStartCounter });
  });

// Route to increment the counter when the game is started
app.post('/api/start-game', (req, res) => {
    // Increment the counter when the game is started
    gameStartCounter += 1;
  
    // Add database logic here to update the counter in the database
    // Example: await db.query('UPDATE counter_table SET counter = $1', [gameStartCounter]);
  
    res.status(200).json({ message: 'Game start counter updated', counter: gameStartCounter });
  });

//PROD: Send all other requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'phaser-react/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
