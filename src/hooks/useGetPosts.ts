import { gql, useQuery } from '@apollo/client';

// query the server with below requirements
const GET_POSTS = gql`
	query {
		allPosts(count: 1000) {
			id
			title
			published
			createdAt
			author {
				id
				email
			}
			likelyTopics {
				label
				likelihood
			}
		}
	}
`;

// export query for getting posts to be used in components that require it
export const useGetPosts = () => {
	const { error, loading, data } = useQuery(GET_POSTS);

	return { error, loading, data };
};
