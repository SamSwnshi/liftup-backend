import { Router } from "express";
import { fetchData }  from "../controllers/exercise.controller.js"

const router = Router();

router.get("/exercises",fetchData)

export default router;