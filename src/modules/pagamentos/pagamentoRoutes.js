import {Router} from "express";
import { createCheckout } from "./pagamentoController.js";

const router = Router();

router.get("/checkout", createCheckout);

export default router;