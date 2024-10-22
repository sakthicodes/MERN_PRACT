import express from "express";
import { backdelete, backget, backpost, backput } from "../controllers/back.ctrls.js";
 
const router = express.Router();

router.get('/',backget)
router.post('/',backpost)
router.put('/:id',backput)
router.delete('/:id',backdelete)

export default router;