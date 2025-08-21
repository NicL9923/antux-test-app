import { Body1, Caption1, Card, CardHeader } from '@fluentui/react-components';
import { Bot24Regular, Games24Regular, People24Regular, Wrench24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
                    Azure App Service UX
                </h1>
                <pre
                    aria-hidden="true"
                    style={{
                        display: 'inline-block',
                        textAlign: 'left',
                        fontFamily: 'Consolas, "Courier New", monospace',
                        fontSize: 12,
                        lineHeight: 1.1,
                        padding: '12px 16px',
                        borderRadius: 8,
                        background: 'linear-gradient(135deg,#1e1e2f,#2a2a40)',
                        color: '#9cdcfe',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                        overflowX: 'auto',
                        maxWidth: '100%',
                        whiteSpace: 'pre',
                        margin: 0,
                    }}
                >{`   ░███                                                    ░███                               
  ░██░██                                                  ░██░██                              
 ░██  ░██  ░█████████ ░██    ░██ ░██░████  ░███████      ░██  ░██  ░████████  ░████████       
░█████████      ░███  ░██    ░██ ░███     ░██    ░██    ░█████████ ░██    ░██ ░██    ░██      
░██    ░██    ░███    ░██    ░██ ░██      ░█████████    ░██    ░██ ░██    ░██ ░██    ░██      
░██    ░██  ░███      ░██   ░███ ░██      ░██           ░██    ░██ ░███   ░██ ░███   ░██      
░██    ░██ ░█████████  ░█████░██ ░██       ░███████     ░██    ░██ ░██░█████  ░██░█████       
                                                                   ░██        ░██             
                                                                   ░██        ░██             
                                                                                              
  ░██████                                  ░██                         ░██     ░██ ░██    ░██ 
 ░██   ░██                                                             ░██     ░██  ░██  ░██  
░██          ░███████  ░██░████ ░██    ░██ ░██ ░███████   ░███████     ░██     ░██   ░██░██   
 ░████████  ░██    ░██ ░███     ░██    ░██ ░██░██    ░██ ░██    ░██    ░██     ░██    ░███    
        ░██ ░█████████ ░██       ░██  ░██  ░██░██        ░█████████    ░██     ░██   ░██░██   
 ░██   ░██  ░██        ░██        ░██░██   ░██░██    ░██ ░██            ░██   ░██   ░██  ░██  
  ░██████    ░███████  ░██         ░███    ░██ ░███████   ░███████       ░██████   ░██    ░██ 
                                                                                              
                                                                                              
                                                                                              `}</pre>
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
                <Card style={{ cursor: 'pointer' }} onClick={() => navigate('/team')}>
                    <CardHeader
                        image={<People24Regular />}
                        header={<Body1>Meet the team</Body1>}
                        description={<Caption1>Get to know the team members and sub-teams</Caption1>}
                    />
                </Card>

                <Card style={{ cursor: 'pointer' }} onClick={() => navigate('/tools')}>
                    <CardHeader
                        image={<Wrench24Regular />}
                        header={<Body1>Tools</Body1>}
                        description={<Caption1>Useful tools and Central on-call "Who do I call" directory</Caption1>}
                    />
                </Card>

                <Card style={{ cursor: 'pointer' }} onClick={() => navigate('/ai')}>
                    <CardHeader
                        image={<Bot24Regular />}
                        header={<Body1>AI</Body1>}
                        description={<Caption1>AI-powered features and copilot integrations</Caption1>}
                    />
                </Card>

                <Card style={{ cursor: 'pointer' }} onClick={() => navigate('/minigames')}>
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

export default Home;
