JavaScript Object Manipulation Assignment
This project processes a list of sculpture objects and creates a new object with the length of each string value in the original objects.
Output Example
The first object in the sculptureListLengths array looks like this:
javascript{
  name: 26,
  artist: 20,
  description: 198,
  url: 31,
  alt: 90
}
Complete sculptureListLengths Array
The complete output of the sculptureListLengths array will appear here when the script is run:
javascript[
  {
    name: 26,
    artist: 20,
    description: 198,
    url: 31,
    alt: 90
  }
]
How to Run
Ensure you have Node.js installed on your computer:
bash# Clone this repository
git clone https://github.com/YourUsername/js-object-manipulation.git

# Navigate to the project directory
cd js-object-manipulation

# Run the script
node sculptureScript.js
Files

sculptureScript.js: Contains the JavaScript code that processes the sculpture list

javascript// Import the sculptureList from data.js
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

data.js: Contains the original sculpture data

javascriptconst sculptureList = [
  {
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
  }
];

module.exports = { sculptureList };

readme.md: This file, which includes the output of the script