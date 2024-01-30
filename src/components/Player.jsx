import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleCLick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Bem-vindo {enteredPlayerName ?? 'unknown entity'} </h2>
      <p>
          <input ref={playerName} 
        />
        <button onClick={handleCLick}>Alterar o nome</button>
      </p>
    </section>
  );
}
