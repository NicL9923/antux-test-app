import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import InnerView from './app/InnerView';
import { isSystemDarkTheme } from './app/Utilities/Browser';

function App() {
    const [isDark, setIsDark] = useState(isSystemDarkTheme());

    useEffect(() => {
        setIsDark(isSystemDarkTheme());
    }, []);

    return (
        <FluentProvider theme={isDark ? webDarkTheme : webLightTheme}>
            <InnerView />
        </FluentProvider>
    );
}

export default App;
