import Gist from 'github-api/dist/components/Gist';
import ListRender from './gist-list-render';
import ContentRender from './gist-content-render';

export default class Main {
    constructor({ list, content }) {
        this.list = document.querySelector(list);
        this.list_content = this.list.querySelector('.list_data');
        this.content = document.querySelector(content);
        this.content_header = this.content.querySelector('.content_header_descr');
        this.content_content = this.content.querySelector('.content_data');
        this.gists = [];

        this.listRender = new ListRender(this.list_content);
        this.contentRender = new ContentRender({
            header: this.content_header,
            container: this.content_content
        });

        this.init();
    }

    async getGistsList() {
        let response = await gh_user.listGists();

        return response.data;
    }

    async getGist(id) {
        let last_gist = new Gist(id, MY_OAUTH);
        let gist = await last_gist.read();

        return gist.data;
    }

    async handlerClickItem(e, index) {
        let list_elems = this.list_content.querySelectorAll('li');
        list_elems.forEach(elem => {
            elem.classList.remove('active');
        });

        e.currentTarget.classList.add('active');

        let gist = await this.getGist(this.gists[index].id);
        this.contentRender.render(gist);
    }

    async init() {
        this.gists = await this.getGistsList();
        console.log(this.gists);

        this.listRender.render(this.gists, this.handlerClickItem.bind(this))
    }
}