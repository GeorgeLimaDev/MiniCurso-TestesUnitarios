import {describe, expect, test} from 'vitest'
import { division } from './division'

describe('Calculator - Division operation', () => {
    test('Divides 3/3 to be 1', () => {
        expect(division(3,3)).toBe(1)
    })

    test.fails('Receiving 0 as a divisor', () => {
        expect(division(3,0)).toThrow(Error)
    })
})