import Comics from '../App/Comics/Comics.js';

import './App.scss';

class App {
    async render() {
        await Comics.render();
    }
}

export default new App();