// generics
// Generics are the way to create a components ( functions , classes or interfaces ) that work with different types without Losing type safety

// function genericFunction<T>(args: T): T {                                                    // generic function
//     return args;
// }

const genericFunction1 = <T>(args: T) => {                                                      // generic arrow function
    return args;
}

console.log(genericFunction1<string>("Hey"));
console.log(genericFunction1(25));

interface person<T, U> {                                                                        // generic interface
    Name: T;
    FatherName: U
}

const person: person<string, number> = {
    Name: "Naman",
    FatherName: 55
}

const getLength = <T extends { length: number }>(args: T): number => {   // by using this I am using the generic constraints 
    return args.length;                                                  // it means what ever the argument we will pass that must have the length function contain in it
}

console.log(getLength("Papa"));
console.log(getLength([1, 2, 3, 4, 5, 6]));


class Animal<T> {                                                       // generic classes
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }
    getContents = (): T => this.contents;
}

const firstAnimal = new Animal<string>("This is my first animal");
console.log(firstAnimal.getContents());



// ---------------------------------------------------------------------- Literals / Enums -----------------------------------------------------------------------

type Coin = "2's" | "10's";
const coin: Coin = "2's";

type OrderStatus = "Delivered" | "Pending" | "Returned" | "Cancelled";
const yourOrderStatus: OrderStatus = "Returned";

const checkYourOrderStatus = (action: OrderStatus): void => {
    switch (action) {
        case "Delivered":
            console.log("Your order is Delivered");
            break;
        case "Cancelled":
            console.log("Your order is Cancelled");
            break;
        case "Pending":
            console.log("Your order is Pending");
            break;
        case "Returned":
            console.log("Your order is Returned");
            break;
        default:
            break;
    }
}

