

let styles = {
  color: 'red',
  fontSize: '40px',
};
let type = {
  textDecoration: 'underline',
};

const first = () => {
  let flex = false;



  let cars = ['bmx', 'honda', 'mersedes'];

  return (
    <div>
      <h1 style={styles}>React is best</h1>
      <p style={{ ...styles, ...type }}>Lorem ipsum dolor sit amet.</p>
      <div>
        <button
          onClick={() => console.log('hello')}
          style={{ background: flex ? 'yellow' : 'black' }}>
          SEND
        </button>
      </div>

      <br />
      <input defaultValue={'dilmurat'} type="text" />

      <ul style={{ listStyle: 'none' }}>
        {cars.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

    </div>
  );
};

export default first;
