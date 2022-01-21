class NewNode<T> {
    val: T;
    next: NewNode<T> | T | null;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

class Queue<T> {
    first: NewNode<T> | null;
    last: NewNode<T> | null;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value: T): number {
        const newNode = new NewNode(value);
        if (!this.first && !this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last!.next = newNode as NewNode<T>;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(): any {
        if (!this.first && !this.last && this.size === 0) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first!.next as NewNode<T>;
        this.size--;
        return temp!.val;
    }
}

const q = new Queue();
q.enqueue(10);
console.log(q.enqueue(20));
console.log(q.dequeue());
