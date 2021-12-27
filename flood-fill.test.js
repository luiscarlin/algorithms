import floodFill from './flood-fill';
describe('flood fill', () => {
  describe('given walls as 1 and nodes as 0', () => {
    it('counts the number of nodes within a section given one of the nodes coordinates', () => {
      const grid = `000100
                    001100
                    100100`;

      const nodesInSection = floodFill(grid, 0, 0);

      expect(nodesInSection).toEqual(7);
    });
  });
});
