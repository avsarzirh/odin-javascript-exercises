const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Avşar', () => {
    expect(values.firstName).toEqual('Avşar');
  });
  test('lastName is Zırh', () => {
    expect(values.lastName).toEqual('Zırh');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1990', () => {
    expect(values.birthYear).toEqual(1990);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Avşar Zırh and I am 36 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Avşar Zırh', () => {
    expect(values.fullName).toEqual('Avşar Zırh');
  });
  test('age is 36', () => {
    expect(values.age).toEqual(36);
  });
});
