import {trimPostLength, formatDate} from './blog.helpers';

describe('trimPostLength function', () => {
    const createStringLength = (length) => {
        let arr = []
        for(let i=0; i<length; i++){
            arr.push('a')
        }
        return arr.join('')
    }

    describe('Happy path', () => {
        it('For 300 characters', () => {
            const post = createStringLength(300)
            expect(trimPostLength(post)).toEqual(post)
        })
        it('For 301 characters', () => {
            const post = createStringLength(301)
            const expected = createStringLength(300)+'...'
            expect(trimPostLength(post)).toEqual(expected)
        })
    })
})

describe('formatDate function', () => {
    describe('Happy path', () => {
        it('For 2018-12-01', () => {
            const date = new Date('2018-12-01')
            expect(formatDate(date)).toEqual('1/12/18')
        })
    })
})
