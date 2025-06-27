import { Body1 } from '@fluentui/react-components';
import BackButton from '../../Controls/BackButton';

const Tools = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <BackButton />

            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>🔧 Tools</h1>
                <Body1>Useful tools and Central on-call "Who do I call" directory</Body1>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <Body1>Tools and directory coming soon!</Body1>
            </div>
        </div>
    );
};

export default Tools;
