import {Router} from "express";
import { createCheckout } from "./pagamentoController.js";

const router = Router();

router.post("/checkout", createCheckout);

export default router;