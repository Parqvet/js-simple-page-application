import Home from '../controllers/index.controller';

let content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    switch (route) {
        case '#/':{
            return content.appendChild(Home());
        }
        case '#/posts':
            return console.log('post!');
        case '#/products':
            return console.log('products!');
        default:
            return console.log('404');
    }
}

export {
    router
};