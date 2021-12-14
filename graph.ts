interface Vertex {
    data: string
}

class Graph {
    adjacencyList: Record<string, string[]>;
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key: string) {
        this.adjacencyList[key] ??= [];
    }

    addEdge(v1: Vertex, v2: Vertex) {
        if (this.adjacencyList[v1.data]) {
            this.adjacencyList[v1.data].push(v2.data);
            this.adjacencyList[v2.data] ??= [];
            this.adjacencyList[v2.data].push(v1.data);
        }
    }

    removeEdge(v1: Vertex, v2: Vertex) {
        this.adjacencyList[v1.data] = this.adjacencyList[v1.data].filter(item => item !== v2.data);
        this.adjacencyList[v2.data] = this.adjacencyList[v2.data].filter(item => item !== v1.data);
    }

    removeVertex(vertex: Vertex) {
        this.adjacencyList[vertex.data].map((item) => {
            this.adjacencyList[item] = this.adjacencyList[item].filter(elem => elem !== vertex.data);
        });
        delete this.adjacencyList[vertex.data];
    }

    depthFirstSearchRecursive(start: Vertex) {
        const result = [];
        const visited: Record<string, boolean> = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex.data) return null;
            visited[vertex.data] = true;
            result.push(vertex.data);
            adjacencyList[vertex.data].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    let newVert: Vertex = { data: neighbor };
                    return dfs(newVert);
                }
            });
        })(start);
        return result;
    }

    depthFirstSearchIterative(start: Vertex) {
        const stack = [start.data];
        const result = [];
        const visited: Record<string, boolean> = {};
        let currentVertex: string = "";
        visited[start.data] = true;
        while (stack.length > 0) {
            currentVertex = stack.pop()!;
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    beadthFirst(start: Vertex) {
        const queue = [start.data];
        const result = [];
        const visited: Record<string, boolean> = {};
        let currentVertex: string = "";
        visited[start.data] = true;
        while (queue.length > 0) {
            currentVertex = queue.shift()!;
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Dallas");
graph.addVertex("Hong Kong");
const newVertex1: Vertex = { data: "Tokyo" };
const newVertex2: Vertex = { data: "Dallas" };
const newVertex3: Vertex = { data: "Aspen" };
const newvertex4: Vertex = { data: "Hong Kong" };
graph.addEdge(newVertex1, newVertex2);
graph.addEdge(newVertex2, newVertex3);
graph.addEdge(newVertex3, newVertex1);
graph.addEdge(newvertex4, newVertex1);
//graph.removeEdge(newVertex1, newVertex2);
//graph.removeVertex(newvertex4);
console.log(graph.depthFirstSearchRecursive(newVertex1));
console.log(graph.depthFirstSearchIterative(newVertex1));
console.log(graph.depthFirstSearchRecursive(newVertex1));
console.log(graph.beadthFirst(newVertex1));
//console.log(graph);
