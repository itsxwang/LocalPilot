import {  getUser,addUser } from "../controller/userController";

import { Router } from "express";

const router = Router();

router.get("/get", getUser);
router.post("/add", addUser);

export default router

