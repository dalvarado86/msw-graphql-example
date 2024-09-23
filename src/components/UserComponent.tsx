"use client";

import { useQuery, gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

const GET_USER = gql`
	query GetUser($userId: ID!) {
		user(id: $userId) {
			id
			name
			email
		}
	}
`;

const UPDATE_USER = gql`
	mutation UpdateUser($userId: ID!, $name: String!, $email: String!) {
		updateUser(id: $userId, name: $name, email: $email) {
			id
			name
			email
		}
	}
`;

export default function UserComponent() {
	const userId = "123";
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { userId },
	});

	useEffect(() => {
		if (data) {
			setName(data.user.name);
			setEmail(data.user.email);
		}
	}, [data]);

	const [updateUser] = useMutation(UPDATE_USER);
	
	const handleUpdate = () => {
		updateUser({
			variables: {
				userId,
				name: "John Doe Updated",
				email: "john.doe.updated@example.com",
			},
			refetchQueries: [{ query: GET_USER, variables: { userId } }],
		})
			.then(response => {
				setName(response.data.updateUser.name);
				setEmail(response.data.updateUser.email);
			})
			.catch(err => {
				console.error("Error updating user", err);
			});
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<h1>User Information</h1>
			<p>ID: {userId}</p>
			<p>Name: {name}</p>
			<p>Email: {email}</p>

			<button onClick={handleUpdate}>Update user</button>
		</div>
	);
}