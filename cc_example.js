//Task 5

let orders = [
    {id: 101, customer: "Alice", total: 300},
    {id: 102, customer: "Bob", total: 450}
];

function findOrder(orders,orderId) {
    return orders. find(order => order.id == orderID)
}

console.log(findOrder(orders,102))