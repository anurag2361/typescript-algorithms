class HashTable {
    keyMap: any[];
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key: string) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key: string, value: string) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key: string) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
    }
}

const ht = new HashTable(3);
ht.set("hello", "world");
ht.set("hello1", "world1");
ht.set("hello2", "world2");
ht.set("hello3", "world3");
console.log(ht.get("hello2"))
