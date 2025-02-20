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
    }

    :host([is-odd]) .event-content {
      bottom: 100%;
      margin-bottom: 20px;
    }

    :host(:not([is-odd])) .event-content {
      top: 100%;
      margin-top: 20px;
    }

    :host(:hover) .event-content {
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

    :host(:hover) .dot {
      background-color: var(--dot-hover-bg-color);
      transform: scale(1.2);
    }

    .year {
      font-size: 1rem;
      font-weight: 500;
      color: #666;
      transition: all 0.3s ease;
    }

    :host(:hover) .year {
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
    isOdd: { type: Boolean, reflect: true, attribute: "is-odd" },
  };

  render() {
    return html`
      <div class="dot"></div>
      <div class="year">${this.title}</div>
      <div class="event-content">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
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
      padding: 40px 20px;
    }

    .timeline {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      min-height: 150px;
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

    @media (max-width: 768px) {
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
        
    }
  `;

  static properties = {
    events: { type: Array }
  };

  constructor() {
    super();
    this.events = [
      { title: "2010", description: "世新大學畢業" },
      { title: "2011", description: "開始第一份工作" },
      { title: "2012", description: "轉職新領域" },
      { title: "2013", description: "持續成長" },
      { title: "2015", description: "職涯轉折點" },
      { title: "2017", description: "新的挑戰" },
      { title: "2022", description: "重要里程碑" },
      { title: "Current", description: "現在" }
    ];
  }

  render() {
    return html`
      <div class="timeline" role="list">
        ${this.events.map((event, index) => html`
          <event-element
            .title=${event.title}
            .description=${event.description}
            ?is-odd=${index % 2 === 0}
            role="listitem"
          ></event-element>
        `)}
      </div>
    `;
  }
}

customElements.define('event-element', EventElement);
customElements.define('timeline-element', TimelineElement);
