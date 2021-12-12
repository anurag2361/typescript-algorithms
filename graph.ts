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
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
const newVertex1: Vertex = { data: "Tokyo" };
const newVertex2: Vertex = { data: "Dallas" };
const newVertex3: Vertex = { data: "Aspen" };
graph.addEdge(newVertex1, newVertex2);
graph.addEdge(newVertex2, newVertex3);
graph.removeEdge(newVertex1, newVertex2);
console.log(graph);
