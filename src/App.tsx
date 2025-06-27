import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './app/Home';
import AI from './app/pages/AI/AI';
import Minigames from './app/pages/Minigames/Minigames';
import Team from './app/pages/Team/Team';
import Tools from './app/pages/Tools/Tools';
import { isSystemDarkTheme } from './app/Utilities/Browser';

function App() {
    const [isDark, setIsDark] = useState(isSystemDarkTheme());

    useEffect(() => {
        setIsDark(isSystemDarkTheme());
    }, []);

    return (
        <FluentProvider theme={isDark ? webDarkTheme : webLightTheme} style={{ minHeight: '100vh', width: '100%' }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/ai" element={<AI />} />
                    <Route path="/minigames" element={<Minigames />} />
                </Routes>
            </Router>
        </FluentProvider>
    );
}

export default App;
