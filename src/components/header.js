import { LitElement, html, css } from 'lit';

export class Header extends LitElement {
    static styles = css`
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

    render() {
        return html`
            <div class="header">
                <div class="logo-area">LOGO AREA</div>
                <nav class="nav-menu">
                    <a href="skills.html" class="nav-item">SKILL</a>
                    <a href="experience.html" class="nav-item">EXPERIENCE</a>
                    <a href="blog.html" class="nav-item">BLOG</a>
                    <a href="contact.html" class="nav-item">CONTACT</a>
                    <a class="nav-item">EN</a>
                </nav>
            </div>
        `;
    }
}

customElements.define('header-component', Header);
