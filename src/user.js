
const users = [
    {
        id: 1,
        name: 'Max',
        orders: [{
            orderId: 11,
            productId: 101,
            status: 'new'
        }],
        favorites: []
    },
    {
        id: 2,
        name: 'Mark',
        orders: [{
            orderId: 12,
            productId: 102,
            status: 'new'
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

const favorites = [{
    userId: 1,
    productId: [103]
}];

const viewProductById = (prodId) => {
    return products.filter((product) => product.productId === prodId);
}

const viewProductByName = (prodName) => {
    return products.filter((product) => product.productName === prodName);
}
console.log(viewProductById(103));
console.log(viewProductByName('TV'));


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
console.log(products);


//Favorites 

const addFavorites = (prodName, userId) => {
    const favProduct = products.filter((product) => { return product.productName === prodName });
    console.log(favProduct[0].productId);
    //push favProduct[0].productId to user's fav list where usersId === userID
    return users.filter((user) => {
        user.id === userId;
        return favorites.productId = favProduct[0].productId;

    });
}

addFavorites('laptop', 1);
console.log(favorites);

const removeFavorites = (prodId) => {
    // return favorites.filter((product) => { return product.favorite !== prodId });
    
    for (let i in favorites.productId) { 
        if (favorites.productId[i] == prodId) {
            return favorites.productId.splice(i);
        }
    }
}

const removedFav = removeFavorites(103);
console.log(removedFav);

const getFavorite = (myUserId) => {
    return favorites.filter(favorite => { return favorite.userId === myUserId });
};

console.log(getFavorite(1));


const getOrders = () => {

}

