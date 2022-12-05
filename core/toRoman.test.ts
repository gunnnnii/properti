import { MAX_SAFE_ROMAN_VALUE, MIN_SAFE_ROMAN_VALUE, toRoman } from "./toRoman"

describe('toRoman', () => {
	it('should correctly handle subtractive form', () => {
			expect(toRoman(4)).toBe('IV')
			expect(toRoman(9)).toBe('IX')
			expect(toRoman(40)).toBe('XL')
			expect(toRoman(90)).toBe('XC')
			expect(toRoman(400)).toBe('CD')
			expect(toRoman(900)).toBe('CM')
	})

	it('should correctly convert arbitrary positive integers', () => {
		expect(toRoman(MIN_SAFE_ROMAN_VALUE)).toBe('N')
		expect(toRoman(39)).toBe('XXXIX')
		expect(toRoman(160)).toBe('CLX')
		expect(toRoman(207)).toBe('CCVII')
		expect(toRoman(246)).toBe('CCXLVI')
		expect(toRoman(789)).toBe('DCCLXXXIX')
		expect(toRoman(1_912)).toBe('MCMXII')
		expect(toRoman(2_000)).toBe('MM')
		expect(toRoman(2_421)).toBe('MMCDXXI')
		expect(toRoman(1_009)).toBe('MIX')
		expect(toRoman(1_066)).toBe('MLXVI')
		expect(toRoman(1_776)).toBe('MDCCLXXVI')
		expect(toRoman(1_918)).toBe('MCMXVIII')
		expect(toRoman(1_954)).toBe('MCMLIV')
		expect(toRoman(2_014)).toBe('MMXIV')
		expect(toRoman(MAX_SAFE_ROMAN_VALUE)).toBe('MMMCMXCIX')

		expect(() => toRoman(MAX_SAFE_ROMAN_VALUE + 1)).toThrowError()
		expect(() => toRoman(MIN_SAFE_ROMAN_VALUE - 1)).toThrowError()
	})
})