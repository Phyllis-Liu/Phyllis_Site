import { LitElement, html, css } from 'lit';
import { Header } from './header.js';
import { Footer } from './footer.js';

export class ContactPage extends LitElement {
    static styles = css`
            :host {
                display: block;
                min-height: 100vh;
            }

            .contact-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
            }

            .footer {
                text-align: center;
                padding: 1rem;
                color: #666;
                margin-top: 2rem;
            }

            .contact-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
            }

            .contact-info {
                padding-top: 2rem;
            }

            .contact-title {
                font-size: 3rem;
                color: #666;
                margin-bottom: 1rem;
            }

            .contact-description {
                color: #666;
                margin-bottom: 2rem;
            }

            .contact-links {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .contact-link {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #666;
                text-decoration: none;
            }

            .contact-form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }

            .form-group {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .form-group label {
                color: #666;
            }

            .form-group input,
            .form-group textarea {
                padding: 0.5rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-family: inherit;
            }

            .form-group textarea {
                min-height: 150px;
                resize: vertical;
            }

            .send-button {
                padding: 0.5rem 2rem;
                background: none;
                border: 1px solid #666;
                border-radius: 4px;
                color: #666;
                cursor: pointer;
                align-self: flex-start;
            }

            .send-button:hover {
                background: #666;
                color: white;
            }
        `;

    render() {
        return html`
            <header-component></header-component>
            <div class="contact-container">
                <div class="contact-content">
                    <div class="contact-info">
                    <h1 class="contact-title">Contact</h1>
                    <p class="contact-description">
                        If you wish to explore my skills and experience further or have any suggestions, feel free to reach out!
                    </p>
                    <div class="contact-links">
                        <a href="mailto:phyllis211035@hotmail.com" class="contact-link">
                            <i class="fas fa-envelope"></i>
                            phyllis211035@hotmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/phyllis211035" class="contact-link">
                            <i class="fab fa-linkedin"></i>
                            www.linkedin.com/in/phyllis211035
                        </a>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button type="submit" class="send-button">Send</button>
                </form>
                </div>
            </div>
            <footer-component></footer-component>
        `;
    }
}

customElements.define('contact-page', ContactPage);
