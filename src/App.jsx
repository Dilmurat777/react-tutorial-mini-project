import Accordion from './components/Accordion/Accordion';
import Filter from './components/Filter';
import Popup from './components/Popup';
import First from './components/first';
import Second from './components/second';

import Weather from "./components/Accordion/Weather";

function App() {
  return (
    <>
      <First />
      <Second />
      <Popup />
      <Filter />
      <Accordion/>
      <Weather />
    </>
  );
}

export default App;
