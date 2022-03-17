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


function pickTopTopics(obj:any, num:number) {
  var arr = [];
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push({
        'key': prop,
        'value': obj[prop]
      });
    }
  }
  arr.sort(function(a, b) {
    return a.value - b.value;
  });
  return arr.reverse().slice(0, num); // returns array
}

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

	Object.keys(postHash).forEach((key) => postHash[key] = pickTopTopics(postHash[key], 3))
	
	return postHash;
};
