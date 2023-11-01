const dateCheck = require('./dateCheck');

test('year comparison', () => {
    expect(dateCheck(2022)).toBe(-1);
    expect(dateCheck(2023)).toBe(0);
    expect(dateCheck(2024)).toBe(1);
})