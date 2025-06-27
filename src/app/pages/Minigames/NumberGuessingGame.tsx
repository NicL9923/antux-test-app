import { Body1, Caption1, Card } from '@fluentui/react-components';
import { useState } from 'react';
import BackButton from '../../Controls/BackButton';

interface NumberGuessingGameProps {
    onBack: () => void;
}

const NumberGuessingGame = ({ onBack }: NumberGuessingGameProps) => {
    const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState("I'm thinking of a number between 1 and 100. Can you guess it?");
    const [gameWon, setGameWon] = useState(false);

    const handleGuess = () => {
        const guessNumber = parseInt(guess);

        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            setMessage('Please enter a valid number between 1 and 100!');
            return;
        }

        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (guessNumber === targetNumber) {
            setMessage(`🎉 Congratulations! You guessed it in ${newAttempts} attempts!`);
            setGameWon(true);
        } else if (guessNumber < targetNumber) {
            setMessage(`Too low! Try a higher number. (Attempt ${newAttempts})`);
        } else {
            setMessage(`Too high! Try a lower number. (Attempt ${newAttempts})`);
        }

        setGuess('');
    };

    const resetGame = () => {
        setGuess('');
        setAttempts(0);
        setMessage("I'm thinking of a number between 1 and 100. Can you guess it?");
        setGameWon(false);
        // Generate new target number
        window.location.reload(); // Simple way to reset the component with new random number
    };

    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <BackButton onClick={onBack}>Back to Games</BackButton>

            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>🔢 Number Guessing Game</h1>
                <Body1>Guess the number between 1 and 100!</Body1>
            </header>

            <div
                style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                <Card style={{ padding: '24px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Body1>{message}</Body1>
                    </div>

                    {!gameWon && (
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <input
                                type="number"
                                value={guess}
                                onChange={e => setGuess(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && handleGuess()}
                                placeholder="Enter your guess"
                                min="1"
                                max="100"
                                style={{
                                    padding: '8px 12px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                    fontSize: '16px',
                                    width: '150px',
                                }}
                            />
                            <button
                                onClick={handleGuess}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    backgroundColor: '#0078d4',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                            >
                                Guess
                            </button>
                        </div>
                    )}

                    {gameWon && (
                        <button
                            onClick={resetGame}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '4px',
                                border: 'none',
                                backgroundColor: '#107c10',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '16px',
                            }}
                        >
                            Play Again
                        </button>
                    )}

                    <div style={{ marginTop: '20px' }}>
                        <Caption1>Attempts: {attempts}</Caption1>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default NumberGuessingGame;
