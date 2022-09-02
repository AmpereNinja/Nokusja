class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'close'})
    const state = this.getAttribute('text');
    const wrapper = document.createElement('div');
    const button = document.createElement('button')
    button.innerHTML = this.getAttribute('text');
    button.classList += 'button'

    wrapper.appendChild(button)
    this.shadowRoot.append(wrapper);
  }
}

customElements.define('nokusja-button', Button);
