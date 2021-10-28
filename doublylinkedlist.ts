class NewDoublyNode {
    val: any;
    next: any;
    prev: any;
    constructor(val: string | number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    length: number;
    head: any;
    tail: any;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * Push a new value to doubly linked list.
     * @param val 
     */
    push(val: number | string) {
        let newNode = new NewDoublyNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Pop the tail from the list.
     */
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    /**
     * Shift (pop and set next to be the new head) the head of the list.
     */
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newnode = new NewDoublyNode(val);
        if (this.length === 0) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            this.head.prev = newnode;
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count: number, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count = 0) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count = 0) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index: any, val: any) {
        let foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index: number, value: string | number) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let newNode = new NewDoublyNode(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

const nodeobj = new DoublyLinkedList();
nodeobj.push("hello");
nodeobj.push(123);
console.log(nodeobj);
