import { Router } from "express";
import { fetchData,fetchBodyPart ,fetchAccordingEquipment,targetList}  from "../controllers/exercise.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/exercises/targetList",targetList)
router.get("/exercises",authMiddleware,fetchData)
router.get("/exercises/bodyPart/:bodyPart",authMiddleware,fetchBodyPart)
router.get("/exercises/equipment/:equipments",authMiddleware,fetchAccordingEquipment)

export default router;