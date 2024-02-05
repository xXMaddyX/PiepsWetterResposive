export default class WelcomePage extends HTMLElement {
    constructor() {
        super()

        this.root = this.attachShadow({mode: "open"});

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        const loadCSS = async () => {
            const responce = await fetch('./components/Welcome.css');
            styles.textContent = await responce.text();
        }
        loadCSS();
    }
    connectedCallback() {
        const template = document.getElementById('welcome-page');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener('appmenuchange', () => {
            this.render();
        });
        this.render();
    }
    render() {
        this.root.querySelector('.welcome-main').innerHTML = `
        <h1>Willkommen</h1>
        <h2>Bei Piep´s Bogensport Wetter</h2>
        `
    }
};

customElements.define("welcome-page", WelcomePage);