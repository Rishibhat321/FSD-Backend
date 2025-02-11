const fs = require('fs');

// for deleting the directory, it must be empty, if contains file then first unlink it.

fs.rmdir("mydir", (e) => {
    if(e) {
        console.error("Error deleting directory: ", e);
        return;
    }
    console.log("Directory deleted successfully");

});