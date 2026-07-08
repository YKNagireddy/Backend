import express from "express";

import {
  createUser,
  getUsers,
  updateUser,
  softDeleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/createuser", createUser);
router.get("/users", getUsers);
router.put("/updateuser/:id", updateUser);
router.put("/deleteuser/:id", softDeleteUser);

export default router;