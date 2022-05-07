const ExplorerController = require("./../../../app/lib/controllers/ExplorerController")
 describe("Test for the ExplorerController", () =>{
     test("1) get list of explorers by mission", () =>{

     const mission = ("node")
     const explorersByMission = ExplorerController.getExplorersByMission(mission)
     expect(explorersByMission.lenght).toBe(10)
     })
 })