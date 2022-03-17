import { useQuery } from '@apollo/client';
import Chart from './components/Chart';
import { useGetPosts } from './hooks/useGetPosts';
import {formatForChart} from './utils/dataFormatter'

function App() {
	const { loading, error, data } = useGetPosts();

	if (loading) return <p> Loading data....</p>;
	if (error) return <p> Error fetching data. Please refresh the page</p>

	const datum = formatForChart(data.allPosts)

	console.log(datum);
	return (
		<div className='App'>
			<Chart data={datum} />
		</div>
	);
}

export default App;
