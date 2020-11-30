const router = (route) => {
    switch (route) {
        case '#/':
            return console.log('home!');
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