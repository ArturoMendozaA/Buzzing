const ExplorerController = require("./../../../app/lib/controllers/ExplorerController")
 describe("Test for the ExplorerController", () =>{
     test("1) get list of explorers by mission", () =>{

     const mission = ("node")
     const explorerInNode = ExplorerController.getExplorersByMission(mission);
        expect(explorerInNode.length).toBe(10);
     })
 })