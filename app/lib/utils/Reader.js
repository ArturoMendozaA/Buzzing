const fs = require("fs");
//const explorers = JSON.parse(rawdata);
class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
        
    }
}
module.exports = Reader;