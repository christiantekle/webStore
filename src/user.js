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

const favoriteProducts = [
    {
        productId: 104,
        productName: 'TV',
        
    }
];
const viewProductById = (prodId) => {
    const productsIds = products.map((product) => { return product.productId });

    if (productsIds.includes(prodId)) {
        return products.filter((product) => product.productId === prodId);
    }
    else {
        "Product ID not found";
    }

}

const viewProductByName = (prodName) => {
    const productsName = products.map((product) => { return product.productName });

    if (productsName.includes(prodName)) {
        return products.filter((product) => product.productName === prodName);
    }
    else {
        return "Product name not found";
    }
}
//console.log(viewProductById(101));
//console.log(viewProductByName('laptop'));


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
    else { return 'product not found'; }
}
orderProd(104);
console.log(products);

const addFavorites = (prodName) => {
    const productsName = products.map((product) => { return product.productName });
    const favproduct = products.find((product) => { return product.productName === prodName });
    const favproducts = favoriteProducts.map((product) => { return product.productName });

    if (productsName.includes(prodName)) {
        if (favproducts.includes(prodName)) {
            return 'product is already in your favorites list.';
        }
        else {
            favoriteProducts.push(favproduct);
            return 'product added';
        }
    }
    else {
        return 'product not found'
    }
}

addFavorites('laptop');
//console.log(favoriteProducts);

const removeFavorites = (prodName) => {
    const reproductsName = products.map((product) => { return product.productName });
    const refavproduct = products.find((product) => { return product.productName === prodName });
    const refavproducts = favoriteProducts.map((product) => { return product.productName });

    if (reproductsName.includes(prodName)) {
        if (refavproducts.includes(prodName)) {
            return favoriteProducts.filter((product) => {
                return product.productName !== prodName;
            })

        }
        else {

            return 'product not found';
        }
    }
    else {
        return 'product not found'
    }
}

const removedFav = removeFavorites('TV');
console.log(removedFav);

const getFavorite = () => {
    return favoriteProducts;
};

const getAllFav = getFavorite();
console.log(getAllFav);

const getOrders = () => {
    return placedOrders;
}

const getMyOrders = getOrders();
console.log(getMyOrders);

