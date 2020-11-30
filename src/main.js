import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

import { router } from './routes/index.router';

window.addEventListener('hashchange', () => {
    router(window.location.hash);
})