"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.addUser = addUser;
const db_js_1 = require("../db.js");
async function getUser(req, res) {
    try {
        const result = await db_js_1.pool.query('SELECT * FROM services');
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
function addUser(req, res) {
    return res.send('User will add from here');
}
