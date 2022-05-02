const ExplorerService = require('./../../../app/lib/services/ExplorerService')

describe('Test for ExplorerService', () => {
    test('filter by mission', () => {
        const explorers = ('explorers-copy.json')
        const explorersInNode = ExplorerService.filterByMission(explorers,'node')
        expect(explorersInNode.length).toBe(10)
    })
})