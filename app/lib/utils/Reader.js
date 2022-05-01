const fs = require("fs");
//const explorers = JSON.parse(rawdata);
class Reader{
    static readJsonFile(jsonFile){
        const rawdata = fs.readFileSync(jsonFile);
        const Explorers = JSON.parse(rawdata);
        return Explorers
    }
}
module.exports = Reader