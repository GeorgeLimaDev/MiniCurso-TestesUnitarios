import {describe, expect, test} from 'vitest'
import {sum} from './sum'

describe('Calculator - Sum operation', () => {
    test('adds 1+2 to equal 3', () => {
        expect(sum(1,2)).toBe(3)
        
    })

    test('Receiving a String instead of a Number', () => {
        expect(sum(1,2)).toBe(3)
        
    })
    expect(sum(1,'2')).toBe('Arguments must be of type numbers')
})
