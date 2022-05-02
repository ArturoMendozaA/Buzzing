const Reader = require('./../utils/Reader')
class ExplorerService{
    
    static filterByMission(explorers, mission){
        
        const explorersInNode = Reader.readJsonFile(explorers).filter((explorer) => explorer.mission == mission);
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers, mission){

    }
    static getExplorersUsernamesByMission(explorers, mission){

    }
}
module.exports = ExplorerService