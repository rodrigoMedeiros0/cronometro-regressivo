import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Facil' targetTime={1} />
        <TimerChallenge title='Medio' targetTime={5} />
        <TimerChallenge title='Dificil' targetTime={10} />
        <TimerChallenge title='Muito dificil' targetTime={15} />
      </div>
    </>
  );
}

export default App;
