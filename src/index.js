// import 'regenerator-runtime/runtime';
import App from './components/App/App.js';
import Comics from './components/App/Comics/Comics.js';

(async () => {
    await App.render();
    Comics.eventListener();
})();