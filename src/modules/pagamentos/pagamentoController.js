import { createPagamento } from "../services/pagamentoService.js";

export const create = async (req, res) => {
    try { 
        const { amount, method } = req.body;

        const payment = await createPagamento({ amount, method });

        res.json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};