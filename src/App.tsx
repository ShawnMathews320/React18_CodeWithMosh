import { useState } from 'react';
import { Alert } from './components/Alert';
import { Button } from './components/Button/Button';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Like } from './components/Like';
import './App.css';

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	const items = ['New York', 'Los Angeles', 'San Francisco'];

	return (
		<div>
			<Like onClick={() => console.log('clicked')} />
			{/* <ListGroup
				heading='Miami'
				items={items}
				onSelectItem={() => {}}></ListGroup>
			<BsFillCalendarFill color='red' size='40'></BsFillCalendarFill>
			<Button onClick={() => {}}>My Button</Button> */}
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
