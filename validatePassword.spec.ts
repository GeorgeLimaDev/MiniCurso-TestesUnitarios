import {describe, expect, test} from 'vitest'
import {validatePassword} from './validatePassword'

describe('Password validator', () => {
    test('Receives a valid password', () => {
        expect(validatePassword('A1b@cdEf')).toBeTruthy()
    })

    test('Receives an invalid password', () => {
        expect(validatePassword('123')).toBeFalsy()
    })
})