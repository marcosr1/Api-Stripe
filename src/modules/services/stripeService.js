import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckout = async ({ amount }) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "brl",
                        product_data: {
                            name: "Produtos Teste"
                        },
                        unit_amount: amount * 100
                    },
                    quantity: 1
                }
            ],
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });

        return ({ url: session.url })
    } catch ( error ) {
        throw new Error({ error: error.message })
    }
};