export interface Post {
	id: string;
	title: string;
	published: boolean;
	createdAt: string | Month;
	author: {
		id: string;
		email: string;
	};
	likelyTopics: {
		label: string;
		likelihood: number;
	}[];
}

export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

export type Topics = "shopping" | "management" | "fishing" | "community" | "potato" | "birthday" | "sport" | "security" | "celebrity" | "wedding";

export interface Colors{
		shopping: string;
	management: string;
	fishing: string;
	community: string;
	potato: string;
	birthday: string;
	sport: string;
	security: string;
	celebrity: string;
	wedding: string;
}