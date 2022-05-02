const ExplorerService = require('./../../../app/lib/services/ExplorerService')

describe('Test for ExplorerService', () => {
    test('filter by mission', () => {
        const explorers = ('explorers-copy.json')
        const explorersInNode = ExplorerService.filterByMission(explorers,'node')
        expect(explorersInNode.length).toBe(10)
    })
    test('Returns the number of explorers',() => {
        const explorers = ('explorers-copy.json')
        const numExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')
        expect(numExplorersInNode).toBe(10)

    })
})