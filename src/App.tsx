import React from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";
import StripeWrapper from "./stripe/StripeWrapper";

function App() {
	return (
		<div className="App">
			<StripeWrapper>
				<TestComponent></TestComponent>
			</StripeWrapper>
		</div>
	);
}
export default App;
