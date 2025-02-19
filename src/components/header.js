import { html, css } from 'lit';

export const Header = () => html`
    <div class="header">
        <div class="logo-area">LOGO AREA</div>
        <nav class="nav-menu">
            <a class="nav-item">SKILL</a>
            <a class="nav-item">EXPERIENCE</a>
            <a class="nav-item">BLOG</a>
            <a class="nav-item">CONTACT</a>
            <a class="nav-item">EN</a>
        </nav>
    </div>
`;

export const headerStyles = css`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        border-bottom: 1px solid #eee;
    }

    .logo-area {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .nav-menu {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .nav-item {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: 500;
        cursor: pointer;
    }
`;
