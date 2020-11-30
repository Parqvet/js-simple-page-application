import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
})