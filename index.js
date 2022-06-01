// const alertMessage = alert => { return alert(alert) }
const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
};

fi = (function() {
    return {
        libraryMethod: function() {
            return "Start by reading the article!";
        },
        myEach: function(collection, callback) {

            if (Array.isArray(collection)) {
                collection.forEach(value => {
                    callback(value)
                })
                return collection
            } else if (typeof collection === 'object' && !Array.isArray(collection)) {
                const objValues = Object.values(collection);
                objValues.forEach(e => {
                    callback(e)
                })
                return collection
            }
        },

    };
})();

function myEach(collection, callback) {

    if (Array.isArray(collection)) {

        for (const [index, element] of collection.entries()) {
            callback(element, index, collection)
                // console.log(`Log Element: ${element}`)
                // console.log(`Log Index: ${index}`)
        }
        return collection

    } else {

        console.log(Object.entries(collection))
        for (const [key, value] of Object.entries(collection)) {
            callback(value, key, collection)
        }
        return collection
    }
}

function myMap(collection, callback) {

    if (Array.isArray(collection)) {

        let newArray = []

        for (const [index, element] of collection.entries()) {
            newArray.push(callback(element, index))
        }
        return newArray

    } else {

        let newArray = []

        for (const [key, value] of Object.entries(collection)) {
            newArray.push(callback(value, key))
        }
        return newArray
    }
}

// console.log(myMap([1, 2, 3], function(num) { return num * 3; }));
// console.log(myMap({ one: 1, two: 2, three: 3 }, function(num, key) { return num * 3; }));

// const testArr = unmodifiedTestArr.slice();
// const testObj = Object.assign({}, unmodifiedTestObj); // obj is {one: 1, two: 2, three: 3, four: 4}

function myReduce(collection, callback, acc = -2) {

    if (Array.isArray(collection)) {

        for (const [index, element] of collection.entries()) {
            acc = callback(acc, element, collection)
        }

        return acc

    } else {

        for (const [key, value] of Object.entries(collection)) {
            console.log(collection)
            acc = callback(acc, value, collection)
        }

        return acc
    }
}

// let reduceTest = myReduce(testArr, function(acc, val, collection) {
//     return acc + val * 3;
// }, 10);

// console.log(reduceTest)

function findTarget(target) {
    return function(currEl) {
        return target === currEl
    }
}

function myFind(collection, predicate) {

    if (Array.isArray(collection)) {

        for (const value in collection) {
            while (predicate(collection[value])) {
                return collection[value]
            }
        }

    } else {
        for (const [key, value] of Object.entries(collection)) {
            while (predicate(collection[value])) {
                return collection[value]
            }
        }

    }
}

function excluder(currEl) {
    return currEl > 10;
}

// const testArr = [6, 11, 5, 12, 17, 100, 9, 1, -8];
// const testObj = {
//     two: 2,
//     three: 3,
//     five: 5,
//     seven: 7
// };

function myFilter(collection, predicate) {

    if (Array.isArray(collection)) {

        let newArray = []
        for (const value in collection) {
            if (predicate(collection[value])) {
                newArray.push(collection[value])
            }
        }

        return newArray

    } else {
        let newArray = []

        for (const [key, value] of Object.entries(collection)) {
            if (predicate(collection[value])) {
                newArray.push(collection[value])
            }
        }
        return newArray

    }
}

// console.log(myFilter(testObj, excluder))

const testArr = unmodifiedTestArr.slice();
const testObj = Object.assign({}, unmodifiedTestObj);

function mySize(collection) {
    if (Array.isArray(collection)) {

        return collection.length

    } else {

        return Object.entries(collection).length
    }
}

function myFirst(array, n = [0]) {

    if (n > 1) {
        return array.splice(0, n)
    } else {
        return array[0]
    }

}


function myLast(array, n = [0]) {

    if (n > [0]) {
        // console.log('if')
        return array.slice(array[(array.length - 1) - n], )
    } else {
        // console.log('else')
        return array[(array.length - 1)]
    }
}

// console.log(myLast(testArr))

function myKeys(object) {

    let newArray = []
    for (const [key, value] of Object.entries(object)) {
        newArray.push(key)
    }
    return newArray
}

function myValues(object) {
    let newArray = []
    for (const [key, value] of Object.entries(object)) {
        newArray.push(value)
    }
    return newArray
}

console.log(myValues(testObj))