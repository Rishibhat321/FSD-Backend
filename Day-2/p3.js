const fs = require('fs');

const newdata = "I am appended at the end of the file";

fs.appendFile("./data.txt", newdata, (err) => {
    if(err)
        console.log(err);
    else
    console.log("Data appended successfully");
})