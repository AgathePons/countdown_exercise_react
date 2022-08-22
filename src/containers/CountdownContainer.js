// == Import
import { useState, useEffect } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import FormCountdown from '../components/FormCountdown';
import Countdown from '../components/Countdown';

// == Composant
function CountdownContainer() {
  // form
  const [inputCountdownValue, setInputCountdownValue] = useState('');
  const [totalSecondValue, setTotalSecondValue] = useState(0);
  // counter
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalCountdown, setIntervalCountdown] = useState(null);

  const handleInputCountdownChange = (e) => {
    setInputCountdownValue(Math.max(0, Number(e.target.value)));
  };

  const handleFormCountdownSubmit = () => {
    setTotalSecondValue(inputCountdownValue);
  };

  useEffect(() => {
    setDays(Math.floor(totalSecondValue / (60 * 60 * 24)));
    const restDays = totalSecondValue % (60 * 60 * 24);
    setHours(Math.floor(restDays / (60 * 60)));
    const restHours = restDays % (60 * 60);
    setMinutes(Math.floor(restHours / 60));
    const restMinutes = restHours % 60;
    setSeconds(restMinutes);
    if (totalSecondValue === 0) {
      console.log('FIN');
      clearInterval(intervalCountdown);
    }
  }, [totalSecondValue]);

  const handleGoButtonClick = () => {
    setIntervalCountdown(
      setInterval(() => {
        setTotalSecondValue((oldSeconds) => oldSeconds - 1);
      }, 1000),
    );
  };

  const handlePauseButtonClick = () => {
    console.log('pause');
    clearInterval(intervalCountdown);
  };

  const handleResetButtonClick = () => {
    console.log('reset');
    setTotalSecondValue(0);
    setInputCountdownValue('');
  };

  return (
    <Segment className="countdown-container">
      <FormCountdown
        countdownInputNumber={inputCountdownValue}
        onInputCountdownChange={handleInputCountdownChange}
        onFormCountdownSubmit={handleFormCountdownSubmit}
      />
      <Countdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <div className="button-bloc">
        <Button
          primary
          onClick={handleGoButtonClick}
        >
          Go
        </Button>
        <Button
          secondary
          onClick={handlePauseButtonClick}
        >
          Pause
        </Button>
        <Button
          color="orange"
          onClick={handleResetButtonClick}
        >
          Reset
        </Button>
      </div>
    </Segment>
  );
}

// == Export
export default CountdownContainer;
