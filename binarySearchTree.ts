class BinaryNode {
    value: any;
    left: any;
    right: any;
    constructor(value: string | number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: any;
    constructor() {
        this.root = null;
    }

    insert(value: string | number) {
        if (value === null || value === undefined) return null;
        const newNode = new BinaryNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value: string | number) {
        if (!this.root) return false;
        if (value === null || value === undefined) return false;
        let current = this.root;
        let isFound = false;
        while (current && !isFound) {
            if (current.value < value) {
                current = current.right;
            } else if (current.value > value) {
                current = current.left;
            } else {
                isFound = true;
            }
        }
        if (!isFound) return false;
        return current;
    }
}

const newtree = new BinarySearchTree();
newtree.insert(10);
newtree.insert(20);
newtree.insert(30);
newtree.insert(7);
newtree.insert(9);
console.log(newtree.find(10));
