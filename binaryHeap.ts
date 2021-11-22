class MaxBinaryHeap {
    values: Array<number>;
    constructor() {
        this.values = [];
    }
    insert(value: number) {
        this.values.push(value);
        this.bubbleUp();
    }

    private bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element; //swap
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop() as number;
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    private sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: number = 0, rightChild: number = 0;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

const heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(35);
heap.insert(46);
heap.insert(15);
heap.insert(155);
console.log(heap.values);
console.log(heap.extractMax());
