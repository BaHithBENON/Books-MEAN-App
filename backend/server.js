// server.js
const express = require('express');
const cors = require('cors');
const connectDataBase = require('./db/mongodb');
const Routes = require('./routes/routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Utilisez CORS middleware
app.use(cors());

connectDataBase();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/pages/home.html'));
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use(Routes);
