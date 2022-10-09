export default function bfs(graph: { [key: number]: number[] }, node: number) {
  // visited nodes
  let visitedNodes = [];

  // priority queue
  let queue = [];

  visitedNodes.push(node);
  queue.push(node);

  // search the queue until it is empty
  while (queue.length > 0) {
    // assign the top of the queue to variable currentNode

    let currentNode = queue[0];
    console.log('Current node is:' + currentNode.value);

    // if currentNode is the node we're searching for, break & alert
    if (currentNode.value === searchValue) {
      console.log('Found it!');
      return;
    }

    // if currentNode has a left child node, add it to the queue.
    if (currentNode.left !== null) {
      queue.push(graph[currentNode.left]);
    }

    // if currentNode has a right child node, add it to the queue.
    if (currentNode.right !== null) {
      queue.push(graph[currentNode.right]);
    }
    // remove the currentNode from the queue.
    queue.shift();
  }

  console.log('Sorry, no such node found :(');
}
