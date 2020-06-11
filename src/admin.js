
const users = [
    {
        id: 1,
        name: 'Max',
        orders: [{
            orderId: 11,
            productId: 101,
            status: 'new'
        },
        {
            orderId: 15,
            productId: 102,
            status: 'new'
        }

        ],
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
    const user = users.find(user => { return user.id === userId });
    return user.orders;
};
console.log(getOrders(1));


const approveOrder = (userId, orderId) => {
    const user = users.find(user => { return user.id === userId });
    const userorders = user.orders;
    const orderToBeApproved = userorders.find(order => {
        return order.orderId === orderId;

    });
    return orderToBeApproved.status = 'approved';
};
approveOrder(1, 11);

const rejectOrder = (userId, orderId) => {
    const user = users.find(user => { return user.id === userId });
    const userorders = user.orders;
    const orderToBeRejected = userorders.find(order => {
        return order.orderId === orderId;
    });
    return orderToBeRejected.status = 'rejected';
};
rejectOrder(1, 11);


const createNewProduct = (prodId, prodName, stockAmt) => {
    products.push({ productId: prodId, productName: prodName, stockAmount: stockAmt })
}

createNewProduct(105, 'earpods', 15000);


const deleteProduct = (productId) => {
    
    return products.filter((product) => {
        return product.productId !== productId;
    })
}
deleteProduct(103);

const allUsers = () => {
    return users;
}
allUsers();

const getUserById = (userId) => {
    return users.filter((user) => { return user.id === userId })
}
console.log(getUserById(3));
const getOrderById = (userId, orderId) => {
    const user = users.find(user => { return user.id === userId });
    const userorders = user.orders;
    const orderById = userorders.find(order => {
        return order.orderId === orderId;

    });
    return orderById;
}
getOrderById(1, 15);


const increaseStock = (productId, byNum) => {
    const productsIds = products.map((product) => { return product.productId });
    const prod = products.find(product => { return product.productId === productId });
    if (productsIds.includes(productId)) {
        prod.stockAmount += byNum;
    }
}
increaseStock(104, 15);
console.log(products);