import express from "express";
import { CreateURLs, GetCostumeUrls,} from "../controller/Urlservice.js";
const router = express.Router();


router.post('/createurl',CreateURLs)
router.get('/:CostumeLink',GetCostumeUrls)
export default router;