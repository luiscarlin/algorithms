/*

DEPTH FIRST SEARCH
- good for finding a path as soon as possible (may be longest)

*/

// undirected graph
// no cycles
// not weighted

// all airports
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// all routes [AIRPORT 1 <===> AIRPORT 2]
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// create adjacency list
const graph = new Map();

// helper functions

// adds a node to the graph
function addNode(node) {
  graph.set(node, []);
}

// adds a connection between nodes in the graph
function addEdge(node1, node2) {
  graph.get(node1).push(node2);
  graph.get(node2).push(node1);
}

// loop over nodes and add each to the graph
for (let node of airports) {
  addNode(node);
}

// loop over edges and populate graph
for (let route of routes) {
  const [from, to] = route;

  addEdge(from, to);
}

// at this point, the adjacency list is populated
console.log('THE GRAPH:\n', graph);

// Find a route from PHX to BKK

// recursive function that finds a path from start to end
// visited will have the path
function dfs(nodeToVisit, visited = new Set()) {
  // visiting this node
  console.log(nodeToVisit);

  // add node to visited list
  visited.add(nodeToVisit);

  // get children
  const connectedNodes = graph.get(nodeToVisit);

  for (const child of connectedNodes) {
    if (child === 'BKK') {
      console.log(`DFS found Bangkok`);
      console.log(visited);
      return;
    }

    if (!visited.has(child)) {
      dfs(child, visited);
    }
  }
}

dfs('LIM');
