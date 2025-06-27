import { Body1 } from '@fluentui/react-components';
import BackButton from '../Controls/BackButton';

const Minigames = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <BackButton />

            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>🎮 Minigames</h1>
                <Body1>Simple games and interactive activities</Body1>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <Body1>Minigames coming soon!</Body1>
            </div>
        </div>
    );
};

export default Minigames;
