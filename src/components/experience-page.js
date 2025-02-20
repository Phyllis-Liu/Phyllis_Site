import { LitElement, html, css } from 'lit';
import './timeline-element.js';
import { Header } from './header.js';
import { Footer } from './footer.js';

export class ExperiencePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .experience-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      flex: 1;
      /* 增加底部間距，確保內容不被 footer 覆蓋 */
      padding-bottom: 120px;
    }

    .title {
      font-size: 48px;
      color: #666;
      margin-bottom: 50px;
    }

    .education {
      margin-top: 100px;
      padding-top: 30px;
      clear: both;
      /* 確保 education 區塊與 footer 之間有足夠間距 */
      margin-bottom: 60px;
    }

    .education-title {
      font-size: 48px;
      color: #666;
      margin-bottom: 50px;
    }

    .education-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      /* 確保底部有足夠間距 */
      margin-bottom: 30px;
    }

    .education-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      background-color: #fff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .school-logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .school-info {
      flex: 1;
    }

    .school-info h3 {
      margin: 0;
      font-size: 18px;
      color: #333;
    }

    .school-info p {
      margin: 5px 0;
      color: #666;
      font-size: 0.9rem;
    }

    .copyright {
      text-align: center;
      color: #666;
      margin-top: 60px;
      padding: 20px 0;
    }

    /* 確保時間線和教育部分不重疊 */
    timeline-element {
      display: block;
      margin-bottom: 60px;
      position: relative;
      z-index: 1;
    }

    /* 確保 footer 正確定位 */
    footer-component {
      margin-top: auto;
      position: relative;
      z-index: 5;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <div class="experience-page">
        <h1 class="title">Experience</h1>        
        <timeline-element></timeline-element>

        <div class="education">
          <h2 class="education-title">Education</h2>
          <div class="education-items">
            <div class="education-item">
              <img src="/images/shih-hsin-logo.png" alt="Shih Hsin University" class="school-logo">
              <div class="school-info">
                <h3>Shih Hsin University</h3>
                <p>Bachelor's degree / English Language and Literature</p>
                <p>2006 - 2010</p>
              </div>
            </div>
            <div class="education-item">
              <img src="/images/apc-logo.png" alt="Australia Pacific College" class="school-logo">
              <div class="school-info">
                <h3>Australia Pacific College</h3>
                <p>Advanced Diploma / Marketing and Communication</p>
                <p>April 2018 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('experience-page', ExperiencePage);