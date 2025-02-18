import { LitElement, html, css } from 'lit';

export class MyApp extends LitElement {
    static styles = css`
        :host {
            display: block;
            min-height: 100vh;
        }

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

        .main-content {
            display: flex;
            align-items: center;
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            gap: 4rem;
        }

        .photo-area {
            width: 500px;
            height: 500px;
            border-radius: 2rem;
            overflow: hidden;
            background-color: #f5f5f5;
        }

        .content-area {
            flex: 1;
        }

        h1 {
            font-size: 4rem;
            margin: 0 0 1rem;
            color: var(--primary-color);
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--secondary-color);
            margin-bottom: 2rem;
        }

        .button-group {
            display: flex;
            gap: 1rem;
        }

        .button {
            padding: 0.8rem 2rem;
            border: 1px solid #ddd;
            border-radius: 2rem;
            text-decoration: none;
            color: var(--primary-color);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .button:hover {
            background-color: var(--accent-color);
            color: white;
            border-color: var(--accent-color);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #f5f5f5;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background-color: var(--accent-color);
            color: white;
        }

        .footer {
            text-align: center;
            padding: 2rem;
            color: var(--secondary-color);
            margin-top: auto;
        }
    `;

    render() {
        return html`
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

            <div class="main-content">
                <div class="photo-area">
                    PHOTO AREA
                </div>
                <div class="content-area">
                    <h1>Hi there!</h1>
                    <p>I'm Phyllis, the creator of this little corner of the internet. 
                       I'm passionate about marketing, technical writing, and front-end development, 
                       and I'm here to share my world with you!</p>
                    <p>Thank you for visiting, and I hope you enjoy your stay!</p>
                    
                    <div class="button-group">
                        <a class="button">Resume</a>
                        <a class="button">Ability</a>
                        <a class="button">Experience</a>
                    </div>

                    <div class="social-links">
                        <a class="social-link" title="Email">📧</a>
                        <a class="social-link" title="LinkedIn">in</a>
                        <a class="social-link" title="GitHub">gh</a>
                    </div>
                </div>
            </div>

            <div class="footer">
                Copyright © 2025 Phyllis Liu. All rights reserved.
            </div>
        `;
    }
}

customElements.define('my-app', MyApp);
