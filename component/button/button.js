class Button extends HTMLElement {
  constructor() {
    super();
    const state = this.getAttribute('text');
    const wrapper = document.createElement('div');
    const button = document.createElement('button')
    button.innerHTML = this.getAttribute('text');
    button.classList += 'button'

    wrapper.appendChild(button)
    this.innerHTML = wrapper;
  }
}

customElements.define('nokusja-button', Button);
