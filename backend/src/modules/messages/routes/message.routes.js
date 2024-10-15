import protectedRoute from "../../../middleware/protectedRoute.js";
import sendMessage from "../controllers/sendMessage.js";
import getMessage from "../controllers/getMessage.js";
import express from "express";


const router = express.Router();


router.get("/:id", protectedRoute, getMessage);

router.post("/send/:id", protectedRoute, sendMessage);


export default router;
