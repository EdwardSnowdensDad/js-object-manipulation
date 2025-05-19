// Import the sculptureList from data.js
const { sculptureList } = require('./data.js');

// Create an empty array to store the results
const sculptureListLengths = [];

// Loop through each object in sculptureList
sculptureList.forEach(sculpture => {
  // Create a new object for this sculpture's length values
  const lengthsObj = {};
  
  // Loop through each property in the current sculpture object
  for (const key in sculpture) {
    // Calculate the length of the string value and assign it to the same key
    lengthsObj[key] = sculpture[key].length;
  }
  
  // Add the new object to our results array
  sculptureListLengths.push(lengthsObj);
});

// Display the result in the console
console.log('First object in sculptureListLengths:');
console.log(sculptureListLengths[0]);

// Log the entire array for reference
console.log('\nComplete sculptureListLengths array:');
console.log(JSON.stringify(sculptureListLengths, null, 2));

module.exports = { sculptureListLengths };