import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ThemePreview = () => {
    const { themeId } = useParams();

    useEffect(() => {
        // Disable right-click, text selection, and common shortcuts
        const prevent = e => e.preventDefault();
        const preventKeys = e => {
            if (
                e.keyCode === 123 || // F12
                (e.ctrlKey && ['u', 'c', 's', 'a'].includes(e.key.toLowerCase()))
            ) {
                e.preventDefault();
            }
        };
        document.addEventListener('contextmenu', prevent);
        document.addEventListener('selectstart', prevent);
        document.addEventListener('keydown', preventKeys);
        document.body.style.userSelect = 'none';
        return () => {
            document.removeEventListener('contextmenu', prevent);
            document.removeEventListener('selectstart', prevent);
            document.removeEventListener('keydown', preventKeys);
            document.body.style.userSelect = '';
        };
    }, []);

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#222' }}>
            <iframe
                src={`/themes/${themeId}/index.html`}
                title="Theme Preview"
                style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }}
                sandbox="allow-scripts allow-same-origin"
            />
            {/* Transparent overlay for extra protection */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10, background: 'transparent', pointerEvents: 'none' }}></div>
        </div>
    );
};

export default ThemePreview; 