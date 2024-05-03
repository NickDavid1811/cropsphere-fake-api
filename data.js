import express from 'express';
import fs from 'fs';

const app = express.Router();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/', (req, res) => {
    res.send(data.products);
});

app.get('/favorites-list', (req, res) => {
    res.send(data.favorites);
});

app.get('/notifications', (req, res) => {
    res.send(data.notifications);
});

app.get('/status-report', (req, res) => {
    res.send(data.status);
});

app.get('/shopping-cart', (req, res) => {
    res.send(data.cart);
});

app.get('/orders', (req, res) => {
    res.send(data.orders);
});

app.get('/returns-list', (req, res) => {
    res.send(data.returns);
});

export default app;