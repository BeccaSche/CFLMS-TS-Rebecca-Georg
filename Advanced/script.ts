let motorBikes:Array<any>=[];
let trucks:Array<any>=[];


class Vehicles{
	brand="";
	year="";


	constructor(brand, year){
		this.brand = brand;
		this.year = year;
	}

	showInfo(){
		return `This is a ${this.brand}, manufacture in ${this.year}.`;
	}
}

var Vehicle1 = new Vehicles("Fiat", "2002");
var Vehicle2 = new Vehicles("Suzuki", "2005");

// document.write(Vehicle1.showInfo());
// document.write(Vehicle2.showInfo());


class MotorBike extends Vehicles{
	type; km; seats; fuel;

	constructor(brand, year, type, km, seats, fuel){
		super(brand, year);
		this.type = type;
		this.km = km;
		this.seats = seats;
		this.fuel = fuel;
		motorBikes.push(this);
		console.table(motorBikes);

	}

	showInfo(){
		return `${super.showInfo()} It's a ${this.type} which has ${this.km}, has ${this.seats} and fueled with ${this.fuel}.<br>`;
	}

}

class Truck extends Vehicles{
	type; km; seats; fuel;

	constructor(brand, year, type, km, seats, fuel){
		super(brand, year);
		this.type = type;
		this.km = km;
		this.seats = seats;
		this.fuel = fuel;
		trucks.push(this);
	}

	showInfo(){
		return `${super.showInfo()} It's a ${this.type} which has ${this.km}, has ${this.seats} and fueled with ${this.fuel}.<br>`;
	}

}
var motorBike1 = new MotorBike("Fiat", "2002", "bike", "30000", "2", "super");
var motorBike2 = new MotorBike("Suzuki", "2010", "bike", "50000", "1", "diesel");

var truck1 = new Truck("Man", "2020", "truck", "1000", "3", "diesel");
var truck2 = new Truck("Skania", "2020", "truck", "1000", "3", "diesel");

for (let i = 0; i<motorBikes.length; i++) {
		document.getElementById("motorbike").innerHTML+= motorBikes[i].showInfo();
	
}

for (let i = 0; i<trucks.length; i++) {
		document.getElementById("truck").innerHTML+= trucks[i].showInfo();
	
}