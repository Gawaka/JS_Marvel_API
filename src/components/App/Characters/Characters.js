import { MODAL_INDEX } from '../../../constants/root';
import { getDataApi } from '../../../utils/getDataApi';

import imgClose from '../../../../public/close.png';
import Bg from '../../../../public/bg-char.jpg';

import '../SCSS/Characters/characters.scss';

class Characters {
    renderContent(data) {
        // let htmlCharacters = ``;
        
        // data.arr.forEach(({ name, thumbnail }) => {
        //     console.log( name, thumbnail );
        // })

        // thumbnail: {path, extension}
        // thumbnail: { path, extension }
        // urls: [0]
    }
    
    // renderNotification() {

    // }

    async render(uri) {
        const data = await getDataApi.getData(uri);
        const htmlCharactersContent = data.map(item => {
            let imgSrc = item.thumbnail.path + '/' + 'standard_fantastic' + '.' + 'jpg';
            return `
            <li class="characters__item">
                <img class="characters__img" src="${imgSrc}"/>
                <div class="characters__text">
                    <span class="characters__name">${item.name}</span>
                    <a class="characters__details" target="_blank" href="${item.urls[0].url}">Details</a>
                </div>
            </li>
            `
        });

        // data.forEach(({ name, thumbnail: {path, extension}, urls: [url] }) => {
        //     for (url in Object) {
        //         if (url.hasOwnProperty(1)) {
        //             console.log(1);
        //         }
        //     }

            // let imgSrc = path + '/' + 'standard_fantastic' + '.' + 'jpg';

            // htmlCharactersContent += `
            // <li class="characters__item">
            //     <img class="characters__img" src="${imgSrc}"/>
            //     <div class="characters__text">
            //         <span class="characters__name">${name}</span>
            //         <a class="characters__details" target="_blank" href="${url}">More comics</a>
            //     </div>
            // </li>
            // `;
            // console.log( name, path, extension, url.url );

        // });

        const htmlCharactersWrapper = `
        <div class="characters">
            <ul class="characters__container"
                style="background-image: url(${Bg});"
            >
                ${htmlCharactersContent}
            </ul>
            <button 
                class="characters__btn"
                onclick="modal.innerHTML=''"
                style="background: url(${imgClose});
                    background-size: contain;
                    background-repeat: no-repeat;"
            >
            </button>
        </div>
    `;

    MODAL_INDEX.innerHTML = htmlCharactersWrapper;




        // data.length ? this.renderContent() : this.renderNotification();

        // console.log(data);
    }
}

export default new Characters();