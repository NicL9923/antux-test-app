import { Body1 } from '@fluentui/react-components';
import BackButton from '../Controls/BackButton';

const Team = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
            <BackButton />

            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>👥 Meet the Team</h1>
                <Body1>Get to know the team members and sub-teams</Body1>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <Body1>Team information coming soon!</Body1>
            </div>
        </div>
    );
};

export default Team;
