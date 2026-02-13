import React from 'react';
import type { NextraThemeLayoutProps } from 'nextra';

const MyCustomLayout: React.FC<NextraThemeLayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
                {/* Your completely custom header here */}
                <h1>My Themed Docs</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/docs">Docs</a>
                </nav>
            </header>
            <main style={{ flexGrow: 1, padding: '2rem' }}>{children}</main>
            <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center' }}>
                My Custom Footer
            </footer>
        </div>
    );
};

export default MyCustomLayout;