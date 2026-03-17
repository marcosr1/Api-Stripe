import { createPixPagamento } from "./mercadopagoService.js";
import { createCheckout } from "./stripeService.js";

export const createPagamento = async ({ amount, method }) => {
    const m = method?.toLowerCase().trim();

    switch (m) {
        case "card":
            return await createCheckout({ amount });

        case "pix":
            return await createPixPagamento({ amount });

        default:
            throw new Error(`Método inválido: ${method}`);
    }
};


