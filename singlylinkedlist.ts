export class NewNode {
    val: string | number;
    next: string | number;
    constructor(val: string | number) {
        this.val = val;
        this.next = '';
    }
}

class SinglyLinkedList {
    length: number;
    head: any;
    tail: any;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * Push a value at the end of the list, making it as the new tail.
     * @param val - value to be pushed.
     */
    push(val: number) {
        let node = new NewNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /**
     * Console all values inside the list.
     */
    traverse() {
        let current = this.head;
        while (current) {
            console.log(this);
            current = current.next;
        }
    }

    /**
     * Remove one element from the end of the list.
     */
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head, this.tail = null;
        }
        return current;
    }

    /**
     * Shift the head of the list to one element ahead.
     */
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    /**
     * Push a value at the begining of the list.
     * @param val 
     */
    unshift(val: any) {
        let newNode = new NewNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index: number, val: any) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
     * Inserts a value at a given index.
     * @param index 
     * @param value 
     */
    insert(index: number, value: any) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let newNode = new NewNode(value);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

const node = new SinglyLinkedList();
node.push(10);
node.push(20);
node.traverse();
// console.log(node.pop());
// console.log(node.unshift("FIRST"));
// console.log(node.get(1));
// console.log(node.set(1, 20));
