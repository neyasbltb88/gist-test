export default class ContentRender {
    constructor({ header, container }) {
        this.container = container;
        this.header = header;
    }

    async render(gist) {
        let files = Object.keys(gist.files);
        let file = gist.files[files[0]];

        this.header.textContent = file.filename;

        let pre = document.createElement('pre');
        pre.textContent = file.content;

        this.container.innerHTML = '';
        this.container.appendChild(pre);
    }
}