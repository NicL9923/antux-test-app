import { Body1, Caption1, Card, CardHeader } from '@fluentui/react-components';
import { Calculator24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../Controls/BackButton';

const Minigames = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <BackButton />

            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>🎮 Minigames</h1>
                <Body1>Simple games and interactive activities</Body1>
            </header>

            <div
                style={{
                    display: 'grid',
                    gap: '24px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    maxWidth: '800px',
                    margin: '0 auto',
                }}
            >
                <Card style={{ cursor: 'pointer' }} onClick={() => navigate('/minigames/number-guessing')}>
                    <CardHeader
                        image={<Calculator24Regular />}
                        header={<Body1>Number Guessing Game</Body1>}
                        description={<Caption1>Guess the number between 1 and 100!</Caption1>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Minigames;
