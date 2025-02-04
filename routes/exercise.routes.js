import { Router } from "express";
import { fetchData,fetchBodyPart }  from "../controllers/exercise.controller.js"

const router = Router();

router.get("/exercises",fetchData)
router.get("/exercises/bodyPart/:bodyPart",fetchBodyPart)

export default router;