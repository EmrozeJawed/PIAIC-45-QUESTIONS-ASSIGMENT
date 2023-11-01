"use strict";
function q45() {
    function createCar(manufacturer, model, options) {
        const car = Object.assign({ manufacturer, model }, options);
        return car;
    }
    const myCar = createCar('Toyota', 'Camry', { color: 'silver',
        sunroof: true });
    console.log(myCar);
}
q45();
