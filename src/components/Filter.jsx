import { useState } from 'react';
import './popup.css'

const Filter = () => {
	const [color, setColor] = useState('orange')
	return (
		<div>
			<div>
				<button style={{background: color === 'orange' ? 'blue' : false}} onClick={() => setColor('orange')}>Orange</button>
				<button style={{background: color === 'red' ? 'blue' : false}} onClick={() => setColor('red')}>Red</button>
				<button style={{background: color === 'black' ? 'blue' : false}} onClick={() => setColor('black')}>Black</button>
			</div>
			<div className="row">
				<div style={{background: color}} className="card"></div>
				<div style={{background: color}} className="card"></div>
				<div style={{background: color}} className="card"></div>
				<div style={{background: color}} className="card"></div>
			</div>
		</div>
	);
};

export default Filter;