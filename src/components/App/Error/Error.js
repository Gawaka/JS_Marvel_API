import { ROOT_INDEX } from '../../../constants/root';

import '../SCSS/Error/error';


class Error {
    render() {
        const htmlError = `
        <div class="error">
            <span>
                <p class="error__alert">Content missing :(</p>
                <p class="error__alert">let's try later</p>
            </span>
        </div>
        `;

        ROOT_INDEX.innerHTML = htmlError;
    }
}

export default new Error();