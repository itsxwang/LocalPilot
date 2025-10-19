"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// router.get("/get", getUser);
router.post("/add", userController_1.addUser);
exports.default = router;
