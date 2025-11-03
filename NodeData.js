const fs = require('fs');

// 1. Create your JavaScript object
const user = {
  name: "Dana",
  id: 456
};

// 2. Convert the object to a JSON string
const jsonString = JSON.stringify(user, null, 2); // 'null, 2' makes it nicely formatted

// 3. Write the string to a new file
fs.writeFile('newUser.json', jsonString, (err) => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('Successfully wrote file');
  }
});