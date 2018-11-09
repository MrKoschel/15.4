function Phone(brand, price, color, origin) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.origin = origin;
}
Phone.prototype.printInfo = function () {
  document.write("The phone brand is " + this.brand + ", the price for it is " + this.price + "$ and the color is " + this.color + ". It was manufactured in " + this.origin + "." + "<br>")
}

var samsungGalaxyS6 = new Phone("Samsung", 1200, "black", "Taiwan");
var iPhone6S = new Phone("Apple", 3000, "white", "USA" );
var onePlusOne = new Phone("OnePlus", 800, "red", "China");

samsungGalaxyS6.printInfo()
iPhone6S.printInfo()
onePlusOne.printInfo()