import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { link } from './community-hub-cards';

@customElement('community-card')
export class CommunityCard extends LitElement {
  @property({ type: String }) imageUrl: string = "";
  @property({ type: String }) cardTitle: string = "";
  @property({ type: String }) description: string = "";
  @property({type: Array}) links: link[] = [];

  static get styles() {
    return css`
      .community-card {
        width: max-content;
        max-width: 480px;
        height: max-content;
        color: #292C3A;
        display: flex;
        align-items: flex-start;
        column-gap: 1.5em;
        padding: .5em;
        padding-left: 0;
      }

      .community-card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .community-card img {
        width: 3em;
        height: auto;
      }

      .community-card-content h3 {
        margin: 0;
        font-size: 1em;
      }

      .community-card-content p {
        font-size: .75em;
        margin-top: 0;
        margin-bottom: .25em;
      }

      .community-card-actions {
        color:  #4F3FB6;
        fill: #4F3FB6;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 1.5em;
      }

      .community-card-actions a {
        font-size: 14px;
        font-weight: bold;
        margin-right: .5em;
        width: 100%;
        border-bottom: 1px solid rgb(79, 63, 182);
        text-decoration: none;
        line-height: 14px;
      }

      .card-link-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: max-content;
      }

      .community-card-image img {
        width: 50px;
        height: auto;
      }

      .community-card-actions a:hover {
        cursor: pointer;
      }

      .community-card-actions a:visited {
        color:  #4F3FB6;
      }
      .card-link-box img {
        width: .5em;
        height: auto;
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated(){
    
  }

  render() {
    return html`
      <div class="community-card">
        <div class="community-card-image">
          <img src=${this.imageUrl} />
        </div>
        <div class="community-card-content">
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
          <div class="community-card-actions">
            ${this.links && this.links.map((link: any) =>
              html`
              <div class="card-link-box">
                <a href=${link.route} target="_blank">${link.text}</a>
                <img src="/assets/new/arrow.svg" alt="arrow" />
              </div>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}