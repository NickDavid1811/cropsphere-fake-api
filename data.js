import express from 'express';
import fs from 'fs';

const app = express.Router();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/', (req, res) => {
    res.send(data);
});

app.get('/terrains', (req, res) => {
    res.send(data.terrains);
});

app.get('/machinery', (req, res) => {
    res.send(data.machinery);
});

app.get('/users', (req, res) => {
    res.send(data.users);
});

app.get('/resources', (req, res) => {
    res.send(data.resources);
});

export default app;
