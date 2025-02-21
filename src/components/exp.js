import { LitElement, html, css } from 'lit';
import { TimelineElement } from './timeline.js';

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
      padding: 10px;
      flex: 1;
      padding-bottom: 50px; /* 稍微減少底部間距 */
    }

    .title {
      font-size: 48px;
      color: #666;
      margin-bottom: 30px; /* 減少標題底部間距 */
    }

    .education {
      margin-top: 0px; /* 減少教育區塊的頂部間距 */
      padding-top: 20px;
      clear: both;
      margin-bottom: 40px; /* 減少教育區塊的底部間距 */
    }

    .education-title {
      font-size: 48px;
      color: #666;
      margin-bottom: 30px; /* 減少教育標題底部間距 */
    }

    .education-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px; /* 減少教育項目之間的間距 */
      margin-bottom: 20px; /* 減少底部間距 */
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

    timeline-element {
      display: block;
      margin-bottom: 40px; /* 減少時間軸底部間距 */
      position: relative;
      z-index: 1;
    }

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
