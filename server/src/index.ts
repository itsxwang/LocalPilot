import express, { type Request, type Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./router/userRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});