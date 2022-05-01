const Reader = require('./../../../app/lib/utils/Reader.js')
describe('Test for Reader', () => {
    test('Check if it returns a name contained in the json file', () => {
        const jsonFile = ('explorers-copy.json')
        const explorersObject = Reader.objectifying(jsonFile)
        expect(explorersObject.explorers).toMatch('Woopa')
    })
})