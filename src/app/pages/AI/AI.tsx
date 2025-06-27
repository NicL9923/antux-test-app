import { Body1 } from '@fluentui/react-components';
import BackButton from '../../Controls/BackButton';

const AI = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <BackButton />

            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>🤖 AI</h1>
                <Body1>AI-powered features and copilot integrations</Body1>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <Body1>AI features coming soon!</Body1>
            </div>
        </div>
    );
};

export default AI;
