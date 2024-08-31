import {describe, expect, test} from 'vitest'
import { multiplication } from './multiplication'

describe('Calculator - multiplication operation', () => {
    test('Multiplies 2x2 to be 4', () => {
        expect(multiplication(2,2)).toBe(4)
    })

    test('Receiving a String instead of a Number', () => {
        expect(multiplication(2,'2')).toBe('Arguments must be of type numbers')
    })
})