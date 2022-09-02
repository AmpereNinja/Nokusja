class Button extends HTMLElement {
  constructor() {
    super();
    const state = this.getAttribute('text');
    const wrapper = document.createElement('div');
    const button = document.createElement('button')
    button.innerText = state;
    button.classList += 'button';

    wrapper.appendChild(button);
    this.append(wrapper);
  }
}

customElements.define('nokusja-button', Button);
