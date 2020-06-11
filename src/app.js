const users = [
    {
        id: 1,
        name: 'Max',
        orders: [{
            orderId: 11,
            productId: 201,
            status: 'new'
        }],
        favorites:  [101, 102]
    },
    {
        id: 2,
        name: 'Mark',
        orders: [{
            orderId: 12,
            productId: 202,
            status: 'new'
        }],
        favorites:  [102]
    },
    {
        id: 3,
        name: 'John',
        orders: [{
            orderId: 13,
            productId: 203,
            status: 'new'
        }],
        favorites:  [101]
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
    productId: [101]
 }]