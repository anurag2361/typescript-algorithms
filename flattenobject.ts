function flattenObject(data: Array<any>) {
    return data.reduce((result, next) => {
        result.push(next);
        if (next.items) {
            result = result.concat(flattenObject(next.items));
            next.items = [];
        }
        return result;
    }, []);
}

const data = [
    {
        "id": 1,
        "level": "1",
        "text": "Sammy",
        "type": "Item",
        "items": [
            {
                "id": 11,
                "level": "2",
                "text": "Table",
                "type": "Item",
                "items": [
                    {
                        "id": 111,
                        "level": "3",
                        "text": "Dog",
                        "type": "Item",
                        "items": null
                    },
                    {
                        "id": 112,
                        "level": "3",
                        "text": "Cat",
                        "type": "Item",
                        "items": null
                    }
                ]
            },
            {
                "id": 12,
                "level": "2",
                "text": "Chair",
                "type": "Item",
                "items": [
                    {
                        "id": 121,
                        "level": "3",
                        "text": "Dog",
                        "type": "Item",
                        "items": null
                    },
                    {
                        "id": 122,
                        "level": "3",
                        "text": "Cat",
                        "type": "Item",
                        "items": null
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "level": "1",
        "text": "Sundy",
        "type": "Item",
        "items": [
            {
                "id": 21,
                "level": "2",
                "text": "MTable",
                "type": "Item",
                "items": [
                    {
                        "id": 211,
                        "level": "3",
                        "text": "MTDog",
                        "type": "Item",
                        "items": null
                    },
                    {
                        "id": 212,
                        "level": "3",
                        "text": "MTCat",
                        "type": "Item",
                        "items": null
                    }
                ]
            },
            {
                "id": 22,
                "level": "2",
                "text": "MChair",
                "type": "Item",
                "items": [
                    {
                        "id": 221,
                        "level": "3",
                        "text": "MCDog",
                        "type": "Item",
                        "items": null
                    },
                    {
                        "id": 222,
                        "level": "3",
                        "text": "MCCat",
                        "type": "Item",
                        "items": null
                    }
                ]
            }
        ]
    }
];
const result1 = flattenObject(data);
console.log(result1);