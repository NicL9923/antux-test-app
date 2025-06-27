import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './app/Home';
import { isSystemDarkTheme } from './app/Utilities/Browser';

function App() {
    const [isDark, setIsDark] = useState(isSystemDarkTheme());

    useEffect(() => {
        setIsDark(isSystemDarkTheme());
    }, []);

    return (
        <FluentProvider theme={isDark ? webDarkTheme : webLightTheme} style={{ minHeight: '100vh', width: '100%' }}>
            <Home />
        </FluentProvider>
    );
}

export default App;
