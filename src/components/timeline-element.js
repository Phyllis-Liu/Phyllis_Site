import { LitElement, html, css } from 'lit';

class EventElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      flex: 1;
      min-width: 120px;
    }

    .event-content {
      position: absolute;
      width: 200px;
      padding: 15px;
      background-color: var(--event-bg-color);
      border-radius: 10px;
      box-shadow: var(--event-shadow);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      text-align: center;
      z-index: 3;
    }

    /* 向上顯示的訊息 */
    :host([is-odd]) .event-content {
      bottom: 100%;
      margin-bottom: 20px;
    }

    /* 向下顯示的訊息 - 增加間距 */
    :host(:not([is-odd])) .event-content {
      top: 100%;
      margin-top: 20px;
    }

    :host(:hover) .event-content,
    :host([active]) .event-content {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    :host([is-odd]) .event-content {
      transform: translateY(10px);
    }

    :host(:not([is-odd])) .event-content {
      transform: translateY(-10px);
    }

    .event-content::before {
      content: "";
      position: absolute;
      left: 50%;
      width: 0;
      height: 0;
      border-style: solid;
    }

    :host([is-odd]) .event-content::before {
      bottom: -10px;
      transform: translateX(-50%);
      border-width: 10px 10px 0 10px;
      border-color: var(--event-bg-color) transparent transparent transparent;
    }

    :host(:not([is-odd])) .event-content::before {
      top: -10px;
      transform: translateX(-50%);
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent var(--event-bg-color) transparent;
    }

    .dot {
      width: var(--dot-size);
      height: var(--dot-size);
      background-color: var(--dot-bg-color);
      border: 4px solid var(--dot-border-color);
      border-radius: 50%;
      margin: 10px 0;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      z-index: 2;
    }

    :host(:hover) .dot,
    :host([active]) .dot {
      background-color: var(--dot-hover-bg-color);
      transform: scale(1.2);
    }

    .year {
      font-size: 1rem;
      font-weight: 500;
      color: #666;
      transition: all 0.3s ease;
    }

    :host(:hover) .year,
    :host([active]) .year {
      color: var(--dot-border-color);
    }

    h3 {
      margin-top: 0;
      color: #333;
      font-size: 1.1rem;
    }

    p {
      margin: 5px 0 0;
      font-size: 0.9rem;
      color: #666;
    }

    .company-name {
      display: block;
      margin-top: 3px;
      font-style: italic;
    }

    @media (max-width: 768px) {
      :host {
        width: 100%;
        margin: 15px 0;
      }

      .event-content {
        position: relative;
        width: calc(100% - 60px);
        margin-left: 60px !important;
        opacity: 1;
        visibility: visible;
        transform: none !important;
        top: 0 !important;
        bottom: auto !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      .dot {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
      }

      .year {
        margin-left: 60px;
        text-align: left;
      }

      .event-content::before {
        display: none;
      }
    }
  `;

  static properties = {
    title: { type: String },
    description: { type: String },
    company: { type: String },
    isOdd: { type: Boolean, reflect: true, attribute: "is-odd" },
    active: { type: Boolean, reflect: true }
  };

  render() {
    return html`
      <div class="dot"></div>
      <div class="year">${this.title}</div>
      <div class="event-content">
        <h3>${this.title}</h3>
        <p>
          ${this.description}
          ${this.company ? html`<span class="company-name">${this.company}</span>` : ''}
        </p>
      </div>
    `;
  }
}

export class TimelineElement extends LitElement {
  static styles = css`
    :host {
      --timeline-width: 4px;
      --timeline-color: #ddd;
      --event-bg-color: #fff;
      --event-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      --event-hover-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      --dot-size: 16px;
      --dot-border-color: #4caf50;
      --dot-bg-color: #fff;
      --dot-hover-bg-color: #4caf50;
      display: block;
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      padding: 100px 20px 160px;
    }

    .container {
      position: relative;
    }

    .timeline {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      min-height: 200px;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: var(--timeline-width);
      background-color: var(--timeline-color);
      transform: translateY(-50%);
    }

    .controls {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: -120px;
      left: auto;
      right: 20px;
      gap: 15px;
      z-index: 5;
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 30px;
      box-shadow: none;
    }

    button {
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 8px 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    button:hover {
      background-color: #e9e9e9;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    button.active {
      background-color: var(--dot-border-color);
      color: white;
    }

    .spacer {
      height: 100px;
      width: 100%;
      clear: both;
    }

    @media (max-width: 768px) {
      :host {
        padding-bottom: 150px;
        padding-top: 60px;
      }

      .timeline {
        flex-direction: column;
        align-items: flex-start;
        min-height: auto;
      }

      .timeline::before {
        left: 30px;
        width: var(--timeline-width);
        height: 100%;
        top: 0;
        transform: none;
      }

      .controls {
        top: -130px;
        flex-wrap: wrap;
      }
    }
  `;

  static properties = {
    events: { type: Array },
    activeIndex: { type: Number },
    isPlaying: { type: Boolean }
  };

  constructor() {
    super();
    this.events = [
      {
        title: "2010",
        description: "Administrative Officer",
        company: "Power Point Management Ltd."
      },
      {
        title: "2011",
        description: "Marcom Executive",
        company: "iMap Intelligence Training."
      },
      {
        title: "2012",
        description: "Customs Clearance Agent",
        company: "U-Line Express Ltd."
      },
      {
        title: "2013",
        description: "Marcom Exec & Manual Writer",
        company: "Rextron International, Inc."
      },
      {
        title: "2015",
        description: "Digital Marketing Executive",
        company: "WaveThink Technology., Inc."
      },
      {
        title: "2017",
        description: "Postal Service Officer",
        company: "Australia Post"
      },
      {
        title: "2012",
        description: "Technical Writer",
        company: "Masterwork Automodules Tech Corp."
      },
      { title: "Current", description: "Upskill Now, Unlock Wow!" }
    ];
    this.activeIndex = 0;
    this.isPlaying = false;
    this.playInterval = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.startAutoplay();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoplay();
  }

  startAutoplay() {
    this.isPlaying = true;
    this.playInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.events.length;
    }, 3000);
  }

  stopAutoplay() {
    this.isPlaying = false;
    if (this.playInterval) {
      clearInterval(this.playInterval);
      this.playInterval = null;
    }
  }

  toggleAutoplay() {
    if (this.isPlaying) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }

  goToNext() {
    this.stopAutoplay();
    this.activeIndex = (this.activeIndex + 1) % this.events.length;
  }

  goToPrevious() {
    this.stopAutoplay();
    this.activeIndex = (this.activeIndex - 1 + this.events.length) % this.events.length;
  }

  selectIndex(index) {
    this.stopAutoplay();
    this.activeIndex = index;
  }

  render() {
    return html`
      <div class="container">
        <div class="controls">
          <button @click=${this.goToPrevious}>PREVIOUS</button>
          <button @click=${this.toggleAutoplay} class="${this.isPlaying ? 'active' : ''}">
            ${this.isPlaying ? 'STOP' : 'PLAY'}
          </button>
          <button @click=${this.goToNext}>NEXT</button>
        </div>

        <div class="timeline" role="list">
          ${this.events.map((event, index) => html`
            <event-element
              .title=${event.title}
              .description=${event.description}
              .company=${event.company}
              ?is-odd=${index % 2 === 0}
              ?active=${index === this.activeIndex}
              role="listitem"
              @click=${() => this.selectIndex(index)}
            ></event-element>
          `)}
        </div>

        <div class="spacer"></div>
      </div>
    `;
  }
}

customElements.define('event-element', EventElement);
customElements.define('timeline-element', TimelineElement);
