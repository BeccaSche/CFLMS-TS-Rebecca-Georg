var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, year) {
        this.brand = "";
        this.year = "";
        this.brand = brand;
        this.year = year;
    }
    Vehicles.prototype.showInfo = function () {
        return "This is a " + this.brand + ", manufacture in " + this.year + ".";
    };
    return Vehicles;
}());
var Vehicle1 = new Vehicles("Fiat", "2002");
var Vehicle2 = new Vehicles("Suzuki", "2005");
document.write(Vehicle1.showInfo());
document.write(Vehicle2.showInfo());
var MotorBike = /** @class */ (function (_super) {
    __extends(MotorBike, _super);
    function MotorBike(brand, year, type, km, seats, fuel) {
        var _this = _super.call(this, brand, year) || this;
        _this.type = type;
        _this.km = km;
        _this.seats = seats;
        _this.fuel = fuel;
        return _this;
    }
    MotorBike.prototype.showInfo = function () {
        return _super.prototype.showInfo + " It's a " + this.type + " which has " + this.km + ", has " + this.seats + " and fueled with " + this.fuel + ".<br>";
    };
    return MotorBike;
}(Vehicles));
var MotorBike1 = new MotorBike("Fiat", "2002", "bike", "30000", "2", "super");
var MotorBike2 = new MotorBike("Suzuki", "2010", "bike", "50000", "1", "diesel");
document.write(Vehicle1.showInfo());
document.write(Vehicle2.showInfo());
