import GitHub from 'github-api';
import MY_OAUTH_TOKEN from './gist-token';

import Main from './main';

window.MY_OAUTH = { token: MY_OAUTH_TOKEN };
window.gh = new GitHub(MY_OAUTH);
window.gh_user = gh.getUser();

const getGistsList = async() => {
    let response = await gh_user.listGists();

    return response.data;
}

window.main = new Main({
    list: '.list',
    content: '.content',
});