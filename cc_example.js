//Task 5

let orders = [
    {id: 101, customer: "Alice", total: 300},
    {id: 102, customer: "Bob", total: 450}
];

function findOrder(orders,orderId) {
    return orders.find(order => order.id == orderId)
}

console.log(findOrder(orders,102))

//Task 6

let inventory = {
    items: [],
    addItem(name,quantity) {
        this.items.push({ name, quantity });
    },
    removeLatestItem(){
        this.items.pop();
    },
    removeFirstItem(){
        this.items.shift();

    },
};

inventory.addItem("Monitor",5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3)
console.log(JSON.stringify(inventory.items));
inventory.removeLatestItem
console.log (JSON.stringify(inventory.items));
inventory.removeFirstItem();
console.log(JSON.stringify(inventory.items));

//Task 7

let employees= [
    {name: "Alice", positon: "Developer" ,salary: 70000},
    {name: "Bob", position: "Designer", salary: 45000},
    {name: "CHarlie", position: "Manager", salary: 9000},
];
function findEmployee(employees ,name) {
    return employees.find(employee => employee.name == name);
}

console.log(findEmployee(employees,'Bob'));

//Task 8

let orders1 = [{id: 1, customer: "Alice"}, {id: 2, customers:"Bob"}];
let orders2 = [{id: 3, customer: "Charlie"}, {id: 4, customers:"David"}];

function mergeOrders(orderA, orderB) {
    return [ ...orderA, ... orderB];
}
console.log(mergeOrders(orders1, orders2));

// EXTRA:

let employee = {name: "Alice", positon: "Developer", salary: 70000}

console.log (`${employee.name} is a ${employee.position} and makes  $${employee.salary}.`)
