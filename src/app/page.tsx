"use client";

import UserComponent from "@/components/UserComponent";
import { ApolloProvider } from "@apollo/client";
import client from "../ApolloClient";

export default function Home() {
	return (
		<div>
			<ApolloProvider client={client}>
				<UserComponent />
			</ApolloProvider>
		</div>
	);
}
