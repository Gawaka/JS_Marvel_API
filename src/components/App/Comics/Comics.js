import { API_KEY, API_URL, URL_COMICS, URL_CHARACTERS} from '../../../constants/const.js';
import {getDataApi} from '../../../utils/getDataApi.js';
import { ROOT_INDEX } from '../../../constants/root.js';

import Logo from '../../../../public/logo.png';

import Characters from '../Characters/Characters.js';
import Error from '../Error/Error.js';

import '../SCSS/Comics/comics.scss';

class Comics {
    renderComics(data) {
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: {extension, path} }) => {

            if (path.lastIndexOf('image_not_available') === -1 ) {
                const uri = API_URL + 'comics/' + id + URL_CHARACTERS;
                // const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
                // console.log(uri);
                let imgSrc = path + '/' + 'portrait_incredible' + '.' + 'jpg';

                htmlContent += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__title">${title}</span>
                        <img class="comics__img" src="${imgSrc}" />
                    </li>
                `;
            }
        });

        const htmlWrapper = `
            <div class="comics__logo"
                style="background: url(${Logo});
                background-size: contain;
                background-repeat: no-repeat;">
            </div>
            <ul class="comics">
                ${htmlContent}
            </ul>
        `;

        // <h1 class="title">Deadpool Comics</h1>

        ROOT_INDEX.innerHTML = htmlWrapper;
    };

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        
        data ? this.renderComics(data) : Error.render();
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(uri);
            })
        });
    }
}

export default new Comics();