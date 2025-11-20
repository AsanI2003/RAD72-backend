import Router from "express"
import { aigenerate } from "../controllers/ai.controller"


const router = Router()

router.post("/generate",aigenerate)

export default router