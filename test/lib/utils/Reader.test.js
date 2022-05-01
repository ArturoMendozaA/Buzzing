const Reader = require('./../../../app/lib/utils/Reader.js')
describe('Test for Reader', () => {
    test('Check if theres some expected objects inside the array', () => {
        const jsonFile = ('explorers-copy.json')
        const explorersObject = Reader.objectifying (jsonFile)
        const expected = [{"githubUsername": "ajolonauta1", "mission": "node", "name": "Woopa1"}];
        expect(Object.values(explorersObject)).not.toEqual(expect.arrayContaining(expected));
    })
})