const fs = require("fs");
//const explorers = JSON.parse(rawdata);
class Reader{
    static readJsonFile(jsonFile){
        const rawdata = fs.readFileSync(jsonFile);
        return JSON.parse(rawdata);
        
    }
}
module.exports = Reader