function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 2000, "blue"),
    iPhone6S = new Phone("Apple", 2250, "silver"),
    OnePlusOne = new Phone("OnePlus", 2600, "white");


samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

