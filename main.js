function Car (brand, model, type, cc) {
    
    var _brand = brand;
    this.getBrand = function (){
        return _brand;
    }


    var _model = model;
    this.getModel = function (){
        return _model;
    }

    var _type = type;
    this.getType = function (){
        return _type;
    }

    var _cc = cc;
    this.getCC = function (){
        return _cc;
    }
};


let car1 = new Car('Ford', 'Mustang', 'Roadster', 5000);
let car2 = new Car('Renault', 'Logan', 'Sedan', 2000);
let car3 = new Car('BMW', 'X6', 'Roadster', 7000);
let car4 = new Car('Volkswagen', 'Polo', 'Sedan', 2800);
let car5 = new Car('Audi', 'A8', 'Coupe', 4000);

const cars = [car1, car2, car3, car4, car5];



function stringOfCarModel () {
    console.log(`${this.getBrand()} ${this.getModel()} is ${this.getType()} and can do wroom-wroom ${this.getCC()} cc`);
    return
};

function checkCC (cars) {
    cars.forEach((car) => {
        
        if (car.getCC() > 3000){
        // console.log (car.getCC());
           stringOfCarModel.call(car);
        }
       
    });

};

checkCC (cars);


