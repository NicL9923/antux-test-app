import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import './App.css';
import InnerView from './app/InnerView';
import { isSystemDarkTheme } from './app/Utilities/Browser';

function App() {
    const [isDark, setIsDark] = useState(isSystemDarkTheme());

    useEffect(() => {
        setIsDark(isSystemDarkTheme());
    }, []);

    return (
        <FluentProvider theme={isDark ? webDarkTheme : webLightTheme} style={{ minHeight: '100vh', width: '100%' }}>
            <InnerView />
        </FluentProvider>
    );
}

export default App;
