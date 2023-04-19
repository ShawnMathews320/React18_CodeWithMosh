import { useState } from 'react';
import { Alert } from './components/Alert';
import { Button } from './components/Button';
import ListGroup from './components/ListGroup';
import './App.css';

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	const items = ['New York', 'Los Angeles', 'San Francisco'];

	return (
		<div>
			<ListGroup
				heading='Miami'
				items={items}
				onSelectItem={() => {}}></ListGroup>
			{/* {alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
			)}
			<Button color='success' onClick={() => setAlertVisibility(true)}>
				My Button
			</Button> */}
		</div>
	);
}

export default App;
