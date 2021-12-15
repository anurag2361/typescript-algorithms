

// class PriorityQueue {
//     values: Array<anany>;
//     constructor() {
//         this.values = []
//     }

//     enqueue(value: any, priority: number) {
//         let newNode = newany(value, priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }

//     private bubbleUp() {
//         let index = this.values.length - 1;
//         const element = this.values[index];
//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2);
//             let parent = this.values[parentIndex];
//             if (element.priority >= parent.priority) break;
//             this.values[parentIndex] = element; //swap
//             this.values[index] = parent;
//             index = parentIndex;
//         }
//     }

//     dequeue() {
//         const min = this.values[0];
//         const end = this.values.pop() as any;
//         if (this.values.length > 0) {
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }

//     private sinkDown() {
//         let index = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while (true) {
//             let leftChildIndex = 2 * index + 1;
//             let rightChildIndex = 2 * index + 2;
//             let leftChild: any = { value: "", priority: 0 }, rightChild: any;
//             let swap = null;
//             if (leftChildIndex < length) {
//                 leftChild = this.values[leftChildIndex];
//                 if (leftChild.priority < element.priority) {
//                     swap = leftChildIndex;
//                 }
//             }
//             if (rightChildIndex < length) {
//                 rightChild = this.values[rightChildIndex];
//                 if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
//                     swap = rightChildIndex;
//                 }
//             }
//             if (swap === null) break;
//             this.values[index] = this.values[swap];
//             this.values[swap] = element;
//             index = swap;
//         }
//     }
// }

// class WeightedGraph {
//     adjacencyList: Record<string, WeightedVertex[]>;
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex: string) {
//         this.adjacencyList[vertex] ??= [];
//     }

//     addEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
//         this.adjacencyList[vertex1.node].push({ node: vertex2.node, weight });
//         this.adjacencyList[vertex2.node].push({ node: vertex1.node, weight });
//     }

//     dijkstra(start: Vertex, finish: Vertex): Array<string> {
//         const node = new PriorityQueue();
//         const distances = {};
//         const prev = {};
//         let smallest: any;
//         let path: Array<string> = [];
//         for (let vertex in this.adjacencyList) {
//             if (vertex === start.node) {
//                 distances[vertex] === 0;
//                 node.enqueue(vertex, 0);
//             } else {
//                 distances[vertex] === Infinity;
//                 node.enqueue(vertex, Infinity);
//             }
//             prev[vertex] = null;
//         }
//         while (node.values.length) {
//             smallest = node.dequeue().val;
//             if (smallest === finish.node) {
//                 while (prev[smallest]) {
//                     path.push(smallest);
//                     smallest = prev[smallest];
//                 }
//                 break;
//             }
//             if (smallest || distances[smallest] !== Infinity) {
//                 for (let neighbor in this.adjacencyList[smallest]) {
//                     let nextNode = this.adjacencyList[smallest][neighbor];
//                     let candidate = distances[smallest] + nextNode.weight;
//                     let nextNeighbor = nextNode.node;
//                     if (candidate < distances[nextNode.node]) {
//                         distances[nextNeighbor] = candidate;
//                         prev[nextNeighbor] = smallest;
//                         node.enqueue(nextNeighbor, candidate);
//                     }
//                 }
//             }
//         }
//         return path.concat(smallest).reverse();
//     }
// }

// const graph = new WeightedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// const v1: Vertex = { node: "A" };
// const v2: Vertex = { node: "B" };
// const v3: Vertex = { node: "C" };
// graph.addEdge(v1, v2, 9);
// graph.addEdge(v1, v3, 5);
// graph.addEdge(v2, v3, 7);
// console.log(graph.adjacencyList);

interface Vertex {
    node: string,
}

interface WeightedVertex extends Vertex {
    weight: number
}

class NewNode {
    val: string;
    priority: number;
    constructor(val: string, priority: number) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    values: any;
    constructor() {
        this.values = [];
    }
    enqueue(val: string, priority: number) {
        let newNode = new NewNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild: any, rightChild: any;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class WeightedGraph {
    adjacencyList: Record<string, WeightedVertex[]>;
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1: string, vertex2: string, weight: number) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start: string, finish: string) {
        const nodes = new PriorityQueue();
        const distances: Record<string, number> = {};
        const previous: Record<string, any> = {};
        let path = [] //to return at end
        let smallest: string = "";
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.Dijkstra("A", "E"));
