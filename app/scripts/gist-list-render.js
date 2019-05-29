export default class ListRender {
    constructor(container) {
        this.container = container;
    }

    renderItem(gist_obj) {
        if (!gist_obj) return false;

        let id = gist_obj.id;
        let descr = gist_obj.description;
        let upd_time = gist_obj.updated_at;
        let files_names = Object.keys(gist_obj.files);

        let li = document.createElement('li');
        li.dataset.id = id;
        li.className = 'list_item';
        li.innerHTML = `
            <span class="descr">${descr || files_names}</span>
            <span class="id">${id}</span>
            <span class="upd_time">${upd_time}</span>
        `;

        return li;
    }

    render(gists_array, click_handler = () => {}) {
        gists_array.forEach((gist, index) => {
            let li = this.renderItem(gist);
            li.addEventListener('click', e => click_handler(e, index));

            this.container.appendChild(li);
        });
    }
}