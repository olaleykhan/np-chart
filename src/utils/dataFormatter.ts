import { Post } from './../typings';

type Topics = {
	label: string;
	likelihood: number;
	__typename: string;
};

// convert an epoch time stamp to just it's month
export const extractMonthFromTimestamp = (stamp: number) => {
	const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(stamp));
	return month;
};

export const formatPosts = (posts: Post[]) => {
	const formattedPosts = posts.map((post: Post) => {
		return { ...post, createdAt: extractMonthFromTimestamp(Number(post.createdAt)) };
	});

	return formattedPosts;
};

export const formatForChart = (posts: Post[]) => {
	const postsWithMonth = posts.map((post: Post) => {
		return { ...post, createdAt: extractMonthFromTimestamp(Number(post.createdAt)) };
	});
	const postHash: any = {
		Jan: [],
		Feb: [],
		Mar: [],
		Apr: [],
		May: [],
		Jun: [],
		Jul: [],
		Aug: [],
		Sep: [],
		Oct: [],
		Nov: [],
		Dec: [],
	};

	postsWithMonth.forEach((post: any) => {
		const values = post.likelyTopics.reduce((prevSet: Array<Topics>, curr: Topics) => {
			return {
				...prevSet,
				[curr.label]: curr.likelihood,
			};
		}, {});
		postHash[post.createdAt] = [...postHash[post.createdAt], values];
	});
};
