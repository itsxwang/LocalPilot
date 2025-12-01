"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.addUser = addUser;
const db_1 = require("../db");
async function getUser(req, res) {
    try {
        const result = await db_1.pool.query('SELECT * FROM users');
        res.json(result.rows);
    }
    catch (err) {
        console.error(";;", err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
function addUser(req, res) {
    return res.send('User will add from here');
}
