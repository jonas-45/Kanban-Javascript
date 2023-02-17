import totalMeals from '../mealsCounter.js';

describe('Total meals count', () => {
  test('Count total meal items diplaying on homepage', () => {
    const mealsArray = [{}, {}, {}, {}, {}];
    const count = totalMeals(mealsArray);

    expect(mealsArray).toHaveLength(5);
    expect(count).toBe(5);
  });
});