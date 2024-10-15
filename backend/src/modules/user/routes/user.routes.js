import getUsersForSidebar from "../controllers/getUsersForSidebar.js";
import protectedRoute from "../../../middleware/protectedRoute.js";
import express from "express";

const router = express.Router();


router.get("/", protectedRoute, getUsersForSidebar);


export default router;