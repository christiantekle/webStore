
const users = [
    {
        id: 1,
        name: 'Max',
        orders: [{
            orderId: 11,
            productId: 101,
            status: 'new'
        }],
        favorites: [102, 103]
    },
    {
        id: 2,
        name: 'Mark',
        orders: [{
            orderId: 12,
            productId: 102,
            status: 'pending'
        }],
        favorites: [102]
    },
    {
        id: 3,
        name: 'John',
        orders: [{
            orderId: 13,
            productId: 103,
            status: 'new'
        }],
        favorites: [101]
    }
];

const products = [
    {
        productId: 101,
        productName: 'phone',
        stockAmount: 7000
    },
    {
        productId: 102,
        productName: 'laptop',
        stockAmount: 5000
    },
    {
        productId: 103,
        productName: 'watch',
        stockAmount: 9000
    },
    {
        productId: 104,
        productName: 'TV',
        stockAmount: 1000
    },


];
const placedOrders = [
    {
        productId: 104,
        productName: 'TV',
    }
];
const pendingOrders = [

];


const viewProductById = (prodId) => {
    return products.filter((product) => product.productId === prodId);
}

const viewProductByName = (prodName) => {
    return products.filter((product) => product.productName === prodName);
}
viewProductById(103);
viewProductByName('TV');


const orderProd = (prodId) => {
    const productsIds = products.map((product) => { return product.productId });
    const prod = products.find(product => { return product.productId === prodId });
    if (productsIds.includes(prodId)) {
        if (prod.stockAmount > 0) {
            pendingOrders.push(prod);
            prod.stockAmount--;
        }
        else { return 'Out of stock' }
    }
    return 'product not found';
}
orderProd(104);
console.log(pendingOrders);

/*------ Favorites -----*/

const addFavorites = (prodName, userId) => {
    const favProduct = products.filter((product) => { return product.productName === prodName });
    console.log(favProduct[0].productId);
    const user = users.find(user => user.id === userId);
    return users.filter((user) => {
        user.id === userId;
        return (user.favorites).push(favProduct[0].productId);

    });
}
addFavorites('laptop', 2);
console.log(users);

const removeFavorites = (favId) => {
    return users.filter((user) => { return user.favorites !== favId });

}
removeFavorites(101);

const getFavorite = (userId) => {
    const user = users.find((user => user.id === userId));
    const userFavs = user.favorites;
    const favProducts = userFavs.map(favId => {
        const product = products.filter(prod => prod.productId === favId);
        return product;
    });

    console.log(favProducts);
};
getFavorite(1);

/*------ Favorites -----*/

const getOrders = (userId) => {
    const user = users.find(user => user.id === userId);
    return user && user.orders;
}
getOrders(2);

const editName = (userId, newName) => {
    const user = users.find(user => user.id === userId);
    return user && (user.name = newName);
}
editName(2, 'James');
