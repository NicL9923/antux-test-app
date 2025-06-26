import { Body1, Button, Caption1, Card, CardHeader } from '@fluentui/react-components';
import { Apps24Regular } from '@fluentui/react-icons';
import { useState } from 'react';

// TODO: Set up a copilot chat so we can extend it with maybe actually useful stuff at some point
// TODO: "Team spirit" section - about the sub-teams, etc
// TODO: Stupid simple minigames
// TODO: Tools section -> Central "Who do I call" list

const InnerView = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <header>
                <h1>🚀 Antux Test App</h1>
                <Body1>Built with React, Vite, TypeScript & Fluent UI v9</Body1>
            </header>

            <Card>
                <CardHeader
                    image={<Apps24Regular />}
                    header={<Body1>Interactive Counter</Body1>}
                    description={<Caption1>Click the button to increment the counter</Caption1>}
                />
                <div>
                    <Body1>Current count: {count}</Body1>
                    <Button appearance="primary" onClick={() => setCount(count => count + 1)}>
                        Increment Counter
                    </Button>
                </div>
            </Card>

            <Card>
                <CardHeader header={<Body1>Tech Stack</Body1>} description={<Caption1>This app is ready for Azure deployment</Caption1>} />
                Howdy
            </Card>
        </div>
    );
};

export default InnerView;
