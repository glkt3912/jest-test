export const KnapsackTestCase = {
  0: {
    arg: {
      count: 9,
      weights: [1,1,1,2,2,2,5,5,5],
      values: [100,100,100,300,300,300,800,800,800],
      capacity: 3,
    },
    expected: 400,
  },
  1: {
    arg: {
      count: 9,
      weights: [1,1,1,2,2,2,5,5,5],
      values: [100,100,100,300,300,300,800,800,800],
      capacity: 4,
    },
    expected: 600,
  },
  2: {
    arg: {
      count: 9,
      weights: [1,1,1,2,2,2,5,5,5],
      values: [100,100,100,300,300,300,800,800,800],
      capacity: 5,
    },
    expected: 800,
  },
};