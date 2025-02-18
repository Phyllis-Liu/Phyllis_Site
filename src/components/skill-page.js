import { LitElement, html, css } from 'lit';

export class SkillPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: white;
    }

    .logo-area {
      border: 1px solid #000;
      padding: 1rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #666;
    }

    .main-content {
      text-align: center;
      padding: 2rem;
    }

    h1 {
      color: #666;
      font-size: 3rem;
      margin-bottom: 4rem;
    }

    .venn-diagram {
      position: relative;
      width: 600px;
      height: 600px;
      margin: 0 auto;
    }

    .circle {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      opacity: 0.7;
    }

    .marketing {
      background-color: #E8DCD0;
      top: 0;
      left: 50px;
    }

    .technical-writing {
      background-color: #C4C4C4;
      top: 0;
      right: 50px;
    }

    .front-end {
      background-color: #D8E1D7;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
    }

    .footer {
      text-align: center;
      padding: 2rem;
      color: #666;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `;

  render() {
    return html`
      <div class="nav-bar">
        <div class="logo-area">LOGO AREA</div>
        <div class="nav-links">
          <a href="/skill">SKILL</a>
          <a href="/experience">EXPERIENCE</a>
          <a href="/blog">BLOG</a>
          <a href="/contact">CONTACT</a>
          <a href="#" @click=\${this._toggleLanguage}>EN</a>
        </div>
      </div>

      <div class="main-content">
        <h1>Skill & Ability</h1>
        <div class="venn-diagram">
          <div class="circle marketing">Marketing</div>
          <div class="circle technical-writing">Technical Writing</div>
          <div class="circle front-end">Front-End</div>
        </div>
      </div>

      <div class="footer">
        Copyright © 2025 Phyllis Liu. All rights reserved.
      </div>
    `;
  }

  _toggleLanguage(e) {
    e.preventDefault();
    // 實作語言切換邏輯
  }
}

customElements.define('skill-page', SkillPage);
