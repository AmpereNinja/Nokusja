class Button extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'})

    shadowRoot.innerHTML = `
    <button class="nokusja-button">
    ${this.getAttribute('name')}
    </button>
    `
  }
  connectedCallback() {
    console.log("Successfully rendered this component");
  }
}

customElements.define('nokusja-button', Button);