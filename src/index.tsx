import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Apollo from './components/ApolloProvider';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Apollo>
			<App />
		</Apollo>
	</React.StrictMode>,
	document.getElementById('root')
);
