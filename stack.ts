class StackNode {
    value: any;
    next: any;
    constructor(value: string | number) {
        this.value = value;
        this.next = null;
    }

}

class Stack {
    first: any;
    last: any;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value: string | number): number {
        let newNode = new StackNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(): any {
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

const obj = new Stack();
obj.push(24);
obj.push(25);
obj.pop();
console.log(obj);
