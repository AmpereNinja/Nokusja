(function () {
  customElements.define(
    'nokusja-button',
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = this.innerHTML;
        button.classList += 'notsuka-button';
        wrapper.append(button);
        this.shadowRoot.append(wrapper);
      }
    }
  );
});
