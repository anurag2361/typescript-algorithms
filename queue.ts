class NewNode<T> {
    val: T;
    next: T;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

class Queue<T> {
    first: any;
    last: any;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value: string | number): number {
        const newNode = new NewNode(value);
        if (!this.first && !this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
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
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const q = new Queue();
q.enqueue(10);
console.log(q.enqueue(20));
console.log(q.dequeue());
