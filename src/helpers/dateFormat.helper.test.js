const formatDate = require('./dateFormat.helper')

describe('formatDate function', () => {
    describe('Happy path', () => {
        it('For 2018-12-01', () => {
            const date = new Date("December 1, 2018")
            expect(formatDate(date)).toEqual('2018-12-01')
        })
    })
})
