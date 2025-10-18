import { type Request, type Response } from "express";
export function getUser(req: Request, res: Response) {
    return res.send('Hello, TypeScript with Express!');
}