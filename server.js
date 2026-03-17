import "dotenv/config";
import express from "express";
import cors from "cors"; 
import pagamentoRoutes from "./src/modules/routes/pagamentoRoutes.js";


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pagamento", pagamentoRoutes);

app.listen(PORT, () => {
    console.log("Servidor rodando ", PORT)
});