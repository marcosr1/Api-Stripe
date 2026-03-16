import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import pagamentoRoutes from "./src/modules/pagamentos/pagamentoRoutes.js";

console.log("STRIPE:", process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use(pagamentoRoutes);

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando ", process.env.PORT)
});