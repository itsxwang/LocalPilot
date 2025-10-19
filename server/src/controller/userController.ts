import { type Request, type Response } from "express";
import { pool } from '../db';




export async function getUser(req: Request, res: Response) {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(";;",err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export function addUser(req: Request, res: Response) {
    return res.send('User will add from here');
}