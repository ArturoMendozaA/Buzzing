const Reader = require('./../../../app/lib/utils/Reader.js')
describe('Test for Reader', () => {
    test('Check if theres some expected objects inside the array ', () => {
        const jsonFile = ('explorers-copy.json')
        const explorersObject = Reader.objectifying (jsonFile)
        expect(explorersObject).toEqual(expect.arrayContaining([expect.objectContaining({"mission":"node"})
            ])
          )
    })
})