import { Router } from "express";
import { fetchData,fetchBodyPart ,fetchAccordingEquipment}  from "../controllers/exercise.controller.js"

const router = Router();

router.get("/exercises",fetchData)
router.get("/exercises/bodyPart/:bodyPart",fetchBodyPart)
router.get("/exercises/equipment/:equipment",fetchAccordingEquipment)

export default router;