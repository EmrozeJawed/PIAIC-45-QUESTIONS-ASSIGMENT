"use strict";
function q38() {
    function describeCity(city, country = 'Unknown') {
        console.log(`${city} is in ${country}.`);
    }
    describeCity('Karachi', 'Pakistan');
    describeCity('Lahore', 'Pakistan');
    describeCity('New York', 'USA');
    describeCity('Paris');
}
q38();
