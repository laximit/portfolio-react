import React from 'react';
import './styles/App.scss';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar/>
			<Content/>
		</div>
	);
}

export default App;