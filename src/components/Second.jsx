import { useState } from 'react';

const Second = () => {
	const [count, setCount] = useState(0);
	
	const countMinis = () => {
		if (count <= 0) {
			return
		} else {
			setCount(count - 1)
		}
	}
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <h2>Counter: {count}</h2>
      <button onClick={countMinis}>minus</button>
    </div>
  );
};

export default Second;
