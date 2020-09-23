import { Button } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

function TestComponent() {
	const stripe = useStripe();
	const elements = useElements();

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
			type: "card",
			card: elements?.getElement(CardElement) as any,
		});

		if (!error) {
			console.log("paymentMethod", paymentMethod);
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			style={{ maxWidth: "400px", margin: "0 auto" }}
		>
			form
			<CardElement></CardElement>
			<Button type="submit" disabled={!stripe}>
				submit
			</Button>
		</form>
	);
}

export default TestComponent;
