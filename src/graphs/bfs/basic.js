/*

BREADTH FIRST SEARCH
- good for finding ALL possible paths from node #1 to node #2
- by having all the paths, you can determine which is the most efficient

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

// 1. Is there a route between PHX and BKK?

function bfs(startingNode) {
  // nodes to traverse
  const queue = [startingNode];

  // visited nodes (unique)
  const visited = new Set([startingNode]);

  while (queue.length > 0) {
    // get a node from the queue
    const node = queue.shift();

    console.log('visiting', node);

    // get list of nodes that are connected to this node
    const connectedNodes = graph.get(node);

    // add connected nodes to the queue to traverse later if we have not yet visited it
    connectedNodes.forEach((connectedNode) => {
      if (connectedNode === 'BKK') {
        console.log(`found BKK. There is a path from ${startingNode} to BKK`);
      }

      if (!visited.has(connectedNode)) {
        // add node to visited node list
        visited.add(connectedNode);

        // add node to queue to be processed
        queue.push(connectedNode);
      }
    });
  }
}

bfs('PHX');

export default bfs;
