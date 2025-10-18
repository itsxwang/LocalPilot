import {  getUser } from "../controller/userController.js";

import { Router } from "express";

const router = Router();

router.get("/get", getUser);

export default router

