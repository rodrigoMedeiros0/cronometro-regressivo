import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Voce perdeu!</p>}
            <p className="challenge-time">
                {targetTime} segundo{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={handleStart}>
                {timerStarted ? 'Parar' : 'Iniciar'} desafio
            </button>
            <p className={timerStarted ? 'active' : undefined}>
                { timerStarted ? 'Tempo rodando...' : 'Tempo pausado'      }                        
            </p>
        </section>
    )
}