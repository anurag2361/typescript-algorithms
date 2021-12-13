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
console.log(graph);
