import {describe, expect, test} from 'vitest'
import { subtraction } from './subtraction'

describe('Calculator - Subtraction operation', () => {
    test('subtracts 2-1 t be equal 1', () => {
        expect(subtraction(2,1)).toBe(1)
    })
    
    test('Receiving a String instead of a Number', () => {
        expect(subtraction(2,'1')).toBe('Arguments must be of type numbers')
    })
})