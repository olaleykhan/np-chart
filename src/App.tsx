import { useQuery } from '@apollo/client';
import Chart from './components/Chart';
import { useGetPosts } from './hooks/useGetPosts';

function App() {
	const { loading, error, data } = useGetPosts();

	if (loading) return <p> Loadiung data....</p>;

	console.log(data);
	return (
		<div className='App'>
			<Chart />
		</div>
	);
}

export default App;
