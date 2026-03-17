import {Router} from "express";
import { createCheckout, createPixPagamnto } from "./pagamentoController.js";

const router = Router();

router.get("/checkout", createCheckout);
router.get("/pix", createPixPagamnto);

export default router;