const Reader = require('./../utils/Reader')
class ExplorerService{
    
    static filterByMission(explorers, mission){

        const explorersInNode = Reader.readJsonFile(explorers).filter((explorer) => explorer.mission == mission);
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers, mission){
       const numEplorersInNode = ExplorerService.filterByMission(explorers, mission)
        return numEplorersInNode.length
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = ExplorerService.getAmountOfExplorersByMission(explorers, mission)
    }
}
module.exports = ExplorerService