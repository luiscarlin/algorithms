function floodFill(rawGrid, startRow, startCol) {
  let grid = rawGrid
    .split('\n')
    .map((row) => row.replaceAll(' ', '').split('').map(Number));

  // printGrid(grid);
  const numberNodes = countNodes(grid, startRow, startCol);

  // printGrid(grid);
  return numberNodes;
}

const printGrid = (grid) => grid.forEach((row) => console.log(row.join('')));

function countNodes(grid, row, col) {
  if (grid[row][col] === 1) {
    return 0;
  }

  // set it as visited
  grid[row][col] = 1;

  let numberOfNodes = 1;

  const neighbors = getNeighbors(grid, row, col);

  for (let [neighborRow, neighborCol] of neighbors) {
    numberOfNodes += countNodes(grid, neighborRow, neighborCol);
  }

  return numberOfNodes;
}

function getNeighbors(grid, row, col) {
  // directions row, col
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let neighbors = [];

  for (let [dr, dc] of directions) {
    const neighborRow = row + dr;
    const neighborCol = col + dc;

    if (
      neighborRow < 0 ||
      neighborCol < 0 ||
      neighborRow >= grid.length ||
      neighborCol >= grid[row].length
    ) {
      continue;
    }

    neighbors.push([neighborRow, neighborCol]);
  }

  return neighbors;
}

export default floodFill;
