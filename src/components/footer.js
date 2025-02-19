import { LitElement, html, css } from 'lit';

export class Footer extends LitElement {
    static styles = css`
        .footer {
            padding: 1rem;
            text-align: center;
            background-color: #f5f5f5;
            position: fixed;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #eee;
        }
    `;

    render() {
        return html`
            <div class="footer">
                Copyright © 2025 Phyllis Liu. All rights reserved.
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);
