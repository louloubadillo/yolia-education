// Based on https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js
class PopUpInfo extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create spans
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);

        const info = document.createElement('span');
        info.setAttribute('class', 'info');

        // Take attribute content and put it inside the info span
        const text = this.innerHTML;
        info.textContent = text;

        const img = document.createElement('span');
        img.className = 'img';
        img.innerText = 'ℹ️';
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');

        style.textContent = `
        .wrapper {
            position: relative;
        }
        .info {
            font-size: 0.8em;
            width: 15em;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: -3.5em;
            left: -7.5em;
            z-index: 3;
        }
        .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
        }
      `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);