import { LitElement, html, css } from 'lit';

export class BlogPage extends LitElement {
  static styles = css`
      :host {
        display: block;
        min-height: 100vh;
      }

    .blog-title {
      text-align: center;
      color: #666;
      font-size: 3rem;
      margin: 4rem 0;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 0 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .blog-card {
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .blog-card-image {
      width: 100%;
      height: 200px;
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .blog-card-content {
      padding: 1.5rem;
    }

    .blog-card-title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .blog-card-description {
      color: #666;
      line-height: 1.5;
    }

    .more-button {
      display: block;
      width: fit-content;
      margin: 3rem auto;
      padding: 0.75rem 2rem;
      border: 1px solid #666;
      border-radius: 2rem;
      color: #666;
      text-decoration: none;
      cursor: pointer;
    }

    .footer {
      text-align: center;
      padding: 1rem;
      color: #666;
      margin-top: 2rem;
    }
  `;

  render() {
    return html`
      <header-component></header-component>

      <h1 class="blog-title">Blog</h1>

      <div class="blog-grid">
        ${this._renderBlogCards()}
      </div>

      <a href="#" class="more-button">MORE</a>

      <footer-component></footer-component>
    `;
  }

  _renderBlogCards() {
    const cards = Array(3).fill({
      title: 'Title',
      description: 'In a whimsical land where purple elephants fly, the sun sings lullabies to dancing trees.....'
    });

    return cards.map(card => html`
      <div class="blog-card">
        <div class="blog-card-image">IMAGE AREA</div>
        <div class="blog-card-content">
          <h2 class="blog-card-title">${card.title}</h2>
          <p class="blog-card-description">${card.description}</p>
        </div>
      </div>
    `);
  }

  _toggleLanguage(e) {
    e.preventDefault();
    // 實作語言切換邏輯
  }
}

customElements.define('blog-page', BlogPage);
