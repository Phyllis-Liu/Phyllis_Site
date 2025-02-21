import { LitElement, html, css } from 'lit';

export class SkillPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
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

    .technical-writing .text {
      position: relative;
      top: 0px;  /* 向下移動文字 */
      left:20px;  /* 向右移動文字 */
}

    .front-end {
      background-color: #D8E1D7;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
    }

  `;

  render() {
    return html`
      <header-component></header-component>

      <div class="main-content">
        <h1>Skill & Ability</h1>
        <div class="venn-diagram">
          <div class="circle marketing">Marketing</div>
          <div class="circle technical-writing"><span class="text">Technical Writing</span></div>
          <div class="circle front-end">Front-End</div>
        </div>
      </div>

      <footer-component></footer-component>
    `;
  }

  _toggleLanguage(e) {
    e.preventDefault();
    // 實作語言切換邏輯
  }
}

customElements.define('skill-page', SkillPage);
