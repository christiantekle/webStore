
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


const getOrders = (userId) => {
    return users.filter((user) => {
        return user.id === userId;
    })
};
console.log(getOrders(2));


const approveOrder = (userId) => {
    return users.filter((user) => {
        user.id === userId;

    });
};
approveOrder(2);
console.log(users);


const createNewProduct = (prodId, prodName, stockAmt) => {
    products.push({ productId: prodId, productName: prodName, stockAmount: stockAmt })
}

createNewProduct(105, 'earpods', 15000);
console.log(products);


const deleteProduct = (productId) => {
    return products.filter((product) => {
        return product.productId !== productId;
    })
}
const updatedProd = deleteProduct(103);
console.log(updatedProd);

const allUsers = () => {
    return users;
}
console.log(allUsers());

const getUserById = (userId) => {
    return users.filter((user) => { return user.id === userId })
}
console.log(getUserById(3));

//get oder by id isn't working

const increaseStock = (productId, byNum) => {
    const productsIds = products.map((product) => { return product.productId });
    const prod = products.find(product => { return product.productId === productId });
    if (productsIds.includes(productId)) {
        prod.stockAmount += byNum;
    }
}
increaseStock(104, 15);
console.log(products);