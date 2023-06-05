import { Helmet } from "react-helmet-async";
import SectionTitles from "../../../comonents/SectionTitles/SectionTitles";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: 
const stripePromise = loadStripe(import.meta.env.VITE_TEST_PAYMENT_GATEWAY);

const Payment = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitles subHeading='Please Process' heading='Payment'></SectionTitles>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;