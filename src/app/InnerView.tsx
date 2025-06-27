import { Body1, Caption1, Card, CardHeader } from '@fluentui/react-components';
import { Bot24Regular, Games24Regular, People24Regular, Wrench24Regular } from '@fluentui/react-icons';

const InnerView = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>📎 AntUX Test App</h1>
            </header>

            <div
                style={{
                    display: 'grid',
                    gap: '24px',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '20px 0',
                }}
            >
                <Card>
                    <CardHeader
                        image={<People24Regular />}
                        header={<Body1>Meet the team</Body1>}
                        description={<Caption1>Get to know the team members and sub-teams</Caption1>}
                    />
                </Card>

                <Card>
                    <CardHeader
                        image={<Wrench24Regular />}
                        header={<Body1>Tools</Body1>}
                        description={<Caption1>Useful tools and Central on-call "Who do I call" directory</Caption1>}
                    />
                </Card>

                <Card>
                    <CardHeader
                        image={<Bot24Regular />}
                        header={<Body1>AI</Body1>}
                        description={<Caption1>AI-powered features and copilot integrations</Caption1>}
                    />
                </Card>

                <Card>
                    <CardHeader
                        image={<Games24Regular />}
                        header={<Body1>Minigames</Body1>}
                        description={<Caption1>Simple games and interactive activities</Caption1>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default InnerView;
