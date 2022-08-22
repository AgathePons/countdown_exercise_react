// == Import
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import CountdownContainer from './CountdownContainer';

// == Composant
function App() {
  return (
    <div className="app">
      <Title title="Countdown App" />
      <Paragraph
        text="Give it a number of seconds to countdown, press enter to init the counter,
        then press the Go button to start"
      />
      <CountdownContainer />
    </div>
  );
}

// == Export
export default App;
