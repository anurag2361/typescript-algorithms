class PriorityNode {
    value: any;
    priority: number;
    constructor(value: any, priority: number) {
        this.priority = priority;
        this.value = value;
    }
}

class PriorityQueue {
    values: Array<PriorityNode>;
    constructor() {
        this.values = []
    }

    enqueue(value: PriorityNode, priority: number) {
        let newNode = new PriorityNode(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    private bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element; //swap
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop() as any;
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    private sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: PriorityNode = { value: "", priority: 0 }, rightChild: PriorityNode;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let item1 = new PriorityNode("item 1", 1);
let item2 = new PriorityNode("item 2", 5);
let item3 = new PriorityNode("item 3", 3);
let newNode = new PriorityQueue();
newNode.enqueue(item1.value, item1.priority);
newNode.enqueue(item2.value, item2.priority);
newNode.enqueue(item3.value, item3.priority);
console.log(newNode.dequeue());
console.log(newNode.dequeue());
console.log(newNode.dequeue());