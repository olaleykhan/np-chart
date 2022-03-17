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
