import { graphql, HttpResponse } from 'msw';

export const handlers = [
	graphql.query('GetUser', ({ variables }) => {
		const { userId } = variables
		return HttpResponse.json({
			data: {
				user: {
					id: userId,
					name: 'John Doe',
					email: 'john.doe@example.com'
				},
			},
		})
	}),

	graphql.mutation('UpdateUser', ({ variables }) => {
		const { userId, name, email } = variables

		return HttpResponse.json({
			data: {
				updateUser: {
					id: userId,
					name: name,
					email: email
				},
			},
		})
	}),
];