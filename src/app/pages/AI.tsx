import { Body1, Button } from '@fluentui/react-components';
import { ArrowLeft24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const AI = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <Button appearance="subtle" icon={<ArrowLeft24Regular />} onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
                Back to Home
            </Button>

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
