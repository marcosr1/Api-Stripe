import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckout = async (req, res) => {
    try {

        const session = await stripe.checkout.sessions.create({
            paymento_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "brl",
                        product_data: {
                            name: "Produtos Teste"
                        },
                        unit_amount: 5000
                    },
                    quantity: 1
                }
            ],
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });

        res.json({ url: session.url });
    } catch ( error ) {
        res.status(500).json({ error: error.message });
    }
};