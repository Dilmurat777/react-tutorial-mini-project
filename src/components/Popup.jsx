import { useState } from 'react';
import './popup.css'

const Popup = () => {
	const [popup, setPopup] = useState(false)

	const handlePopup = (e) => {
		if (e.target.className == 'overlay') {
			setPopup(false)
		}
	}

	return (
		<div>
			<button onClick={() => setPopup(true)}>Open popup</button>
			{
				popup && <div onClick={handlePopup} className="overlay">
				<div className="popup">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit optio magnam nemo voluptate minus, rerum qui modi perspiciatis ad alias sapiente tempore eius sit officiis error. Molestias, minus officiis?
						<button onClick={() => setPopup(false)}>&times;</button>
				</div>
			</div>
			}
		</div>
	);
};

export default Popup;