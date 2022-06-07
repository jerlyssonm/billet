import { Router } from "express";
import getBillet from "../controllers";
import validateBarCode from "../middlewares";


const router = Router();

router.get("/:barcode", validateBarCode, getBillet);

export default router;
