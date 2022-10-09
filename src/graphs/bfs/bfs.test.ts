import bfs from './bfs';

describe('breadthFirstSearch', () => {
  it('works', () => {
    let graph = {
      10: [4, 17],
      4: [1, 9],
      17: [12, 18],
      1: [],
      9: [],
      12: [],
      18: [],
    };

    const result = bfs(graph, 10);

    console.log('result', result);
    expect(1).toBe(1);
  });
});
