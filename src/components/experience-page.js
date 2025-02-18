import { LitElement, html, css } from 'lit';

export class ExperiencePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .title {
      font-size: 48px;
      color: #666;
      margin-bottom: 50px;
    }


    .education {
      margin-top: 100px;
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
    }

    .education-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }

    .school-logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    .school-info h3 {
      margin: 0;
      font-size: 18px;
      color: #333;
    }

    .school-info p {
      margin: 5px 0;
      color: #666;
    }

    .copyright {
      text-align: center;
      color: #666;
      margin-top: 100px;
      padding: 20px 0;
    }
  `;

  render() {
    return html`
      <div class="experience-page">
        <h1 class="title">Experience</h1>
        
        <timeline-element></timeline-element>

        <div class="education">
          <h2 class="education-title">Education</h2>
          <div class="education-items">
            <div class="education-item">
              <img src="public/images/shih-hsin-logo.png" alt="Shih Hsin University" class="school-logo">
              <div class="school-info">
                <h3>Shih Hsin University</h3>
                <p>Bachelor's degree / English Language and Literature</p>
                <p>2006 - 2010</p>
              </div>
            </div>
            <div class="education-item">
              <img src="public/images/apc-logo.png" alt="Australia Pacific College" class="school-logo">
              <div class="school-info">
                <h3>Australia Pacific College</h3>
                <p>Advanced Diploma / Marketing and Communication</p>
                <p>April 2018 - 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright">
          Copyright © 2025 Phyllis Liu. All rights reserved.
        </div>
      </div>
    `;
  }
}

customElements.define('experience-page', ExperiencePage);
