const ExplorerService = require('./../../../app/lib/services/ExplorerService')
const Reader = require('./../../../app/lib/utils/Reader')

describe('Test for ExplorerService', () => {
    test('filter by mission', () => {
        const explorers = Reader.readJsonFile('explorers-copy.json')
        const explorersInNode = ExplorerService.filterByMission(explorers,'node')
        expect(explorersInNode.length).toBe(10)
    })
})