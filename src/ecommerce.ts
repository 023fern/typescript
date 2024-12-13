class Customer {
    private name:string;
    private address:string;

    constructor (name:string, address:string){
        this.name = name;
        this.address = address;
    }
}

class Order {
    private Customer:Customer;
    private OrderDetaill: OrderDetaill[]=[];
    private payment: Payment=new Cash(0,0);
    private date:string;
    private status: string;

    constructor (Customer: Customer,OrderDetaill: OrderDetaill, date: string, status:string){
        this.Customer=Customer;
        this.date = date;
        this.status = status;
    }
    
    public calcSubtotal(){

    }

    public calcTaxt(){

    }

    public calcTotal(){

    }

    public calcTotalWeight(){

    }
    
    public addOrderDetaill(OrderDetaill:OrderDetaill){
        this.OrderDetaill.push(OrderDetaill)
    }
    public payOrder(payment:Payment){
        this.payment=payment

    }

}
class  Payment{
    private amount:number;


    constructor(amount: number){

        this.amount= amount;
    }
}

class check extends Payment{
    private name:string;
    private bankID:string;


    constructor(amount:number, name:string, bankID:string){
        super(amount)
        this.name=name;
        this.bankID=bankID;
    }
    public authorized (){

    }
}

class Cash extends Payment{
    private cashTendered:number;

    constructor(amount:number, cashTendered:number){
        super(amount)
        this.cashTendered=cashTendered;
    }
}

class Credit extends Payment{
private number:string;
private type:string;
private expDate:number;


constructor(amount:number, number:string, type:string, expDate:number){
    super(amount)
    this.number=number;
    this.type=type;
    this.expDate=expDate;
}

public authorized(){

}
}

class Item {
    private shippingWeight:number;
    private description:string;

    constructor(shippingWeight:number , description:string){
        this.shippingWeight=shippingWeight;
        this.description=description;

    }
    public getPriceForQuantity(){

    }

    public getTaxt(){

    }

    public inStock(){

    }
}

class OrderDetaill{
    private Item:Item;
    private quantity:number;
    private taxStatus:string;

    constructor (Item:Item,quantity:number,taxStatus:string){
        this.Item=Item;
        this.quantity=quantity;
        this.taxStatus=taxStatus;
    }
    public calcSubTotal(){

    }

    public calcWeight(){

    }

    public calcTaxt(){

    }
}