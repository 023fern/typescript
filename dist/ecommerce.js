"use strict";
class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Order {
    constructor(Customer, OrderDetaill, date, status) {
        this.OrderDetaill = [];
        this.payment = new Cash(0, 0);
        this.Customer = Customer;
        this.date = date;
        this.status = status;
    }
    calcSubtotal() {
    }
    calcTaxt() {
    }
    calcTotal() {
    }
    calcTotalWeight() {
    }
    addOrderDetaill(OrderDetaill) {
        this.OrderDetaill.push(OrderDetaill);
    }
    payOrder(payment) {
        this.payment = payment;
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class check extends Payment {
    constructor(amount, name, bankID) {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }
    authorized() {
    }
}
class Cash extends Payment {
    constructor(amount, cashTendered) {
        super(amount);
        this.cashTendered = cashTendered;
    }
}
class Credit extends Payment {
    constructor(amount, number, type, expDate) {
        super(amount);
        this.number = number;
        this.type = type;
        this.expDate = expDate;
    }
    authorized() {
    }
}
class Item {
    constructor(shippingWeight, description) {
        this.shippingWeight = shippingWeight;
        this.description = description;
    }
    getPriceForQuantity() {
    }
    getTaxt() {
    }
    inStock() {
    }
}
class OrderDetaill {
    constructor(Item, quantity, taxStatus) {
        this.Item = Item;
        this.quantity = quantity;
        this.taxStatus = taxStatus;
    }
    calcSubTotal() {
    }
    calcWeight() {
    }
    calcTaxt() {
    }
}
