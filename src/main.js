import './components/my-app.js';
import './components/skill-page.js';

// 添加全局樣式
const style = document.createElement('style');
style.textContent = `
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
    }
`;
document.head.appendChild(style);
