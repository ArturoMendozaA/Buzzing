
const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = "explorers.json";
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = "explorers.json";
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmountByMission(mission){
        const explorers = "explorers.json";
        const NumExp = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return NumExp.length;
    }

}
module.exports = ExplorerController;
