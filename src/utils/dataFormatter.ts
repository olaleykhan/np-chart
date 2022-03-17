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

// merge same momths together and find their avarage
const getMonthlyAverage = (arr: any) => {
	const divisor = arr.length;
	const arrKeys = Object.keys(arr[0]);
	const val = arr.reduce((prev: any, curr: any, index: number) => {
		const map: any = {};
		arrKeys.forEach((key) => {
			if (index === arr.length - 1) {
				map[key] = (prev[key] = curr[key]) / divisor;
			}
			map[key] = prev[key] + curr[key];
		});
		return map;
		// return {
		//     shopping: prev.shopping+curr.shopping
		// }
	});

	// val.shopping = val.shopping/divisor;
	return val;
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

	Object.keys(postHash).forEach((key) => {
		postHash[key] = getMonthlyAverage(postHash[key]);
	});

	Object.keys(postHash).forEach((key) => postHash[key] = pickTopTopics(postHash[key], 3))
	
	return postHash;
};
