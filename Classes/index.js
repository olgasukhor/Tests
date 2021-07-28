// Створіть клас Product, який буде приймати в конструкторі аргументи title, price, description та проставляти їх як властивості класу.Потім, створіть клас PizzaProduct, який буде наслідуватись від класу Product.Додайте метод getPizzaPrice() до класу PizzaProduct, який буде повертати інформацію про продукт у вигляді стрічки.

class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;

    }
}

class PizzaProduct extends Product {
    constructor(title, price, description) {
        super(title, price, description)
    }
    getPizzaPrice() {
        return "Title: " + this.title + "; " + "price: " + this.price + "; " + "description:" + this.description;
    }
}
let pizza = new PizzaProduct('pizza', '200', 'solerno');
console.log(pizza.getPizzaPrice());

// Створіть клас Book, який буде працювати аналогічно до класу Product, але в аргумети приймати title, description, author.Другий клас буде називатися AdventureBook та мати метод getAdventureBookInfo().

class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class AdventureBook extends Book {
    constructor(title, description, author) {
        super(title, description, author)
    }
    getAdventureBookInfo() {
        return "Title: " + this.title + "; " + "description: " + this.description + ", " + "author: " + this.author;
    }
}
let newBook = new AdventureBook('Titanik', 'trash', 'people');
console.log(newBook.getAdventureBookInfo());