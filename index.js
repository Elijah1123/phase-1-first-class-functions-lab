// Function that returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function that returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array that holds both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that creates a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// Function that triples the fare
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on the provided function
const selectDifferentDrivers = function(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
};

// Export the functions so they can be used in test/indexTest.js
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
