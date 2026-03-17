import { MercadoPagoConfig, Payment } from "mercadopago";

console.log("TOKEN:", process.env.MP_ACCESS_TOKEN);

export const createPixPagamento = async ({ amount }) => {

    const client = new MercadoPagoConfig({
        accessToken: process.env.ACCESS_TOKEN
    })

    const payment = new Payment(client);

    const result = await payment.create({
        body: {
            transaction_amount: Number(amount),
            payment_method_id: "pix",
            description: "pedido",
            payer: {
                email: "test_user_123@testuser.com"
            }
        }
    });

    return {
        qr_code: result.point_of_interaction.transaction_data.qr_code,
        qr_code_base64: result.point_of_interaction.transaction_data.qr_code_base64
    };
};