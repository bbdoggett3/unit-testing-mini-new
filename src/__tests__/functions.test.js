import { add } from '../utils/functions';

test('two numbers added together', () => {
    expect(add(2, 2)).toBe(4)
})

test('add a string and a number together', () => {
    expect(add("4", 4)).toBe(8)
})

test('Add returns a NaN id no numbers are passed in', () => {
    expect(add('hello', 'ben')).toBeNaN()
})