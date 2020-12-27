/**
 * For more programming concepts, questions, tips, and tutorials, visit:
 *
 * https://bit.ly/devtools-yt
 * https://code.devtools.tech
 * https://devtools.tech
 *
 * Author: Yomesh Gupta (https://yomeshgupta.com)
 */

/**
 * Question: Given a deeply nested array, create a function on the array, namely flatten, that when invoked returns
 * a flat version of the original array. Function should be defined in a way that it can be invoked on existing
 * and future arrays. 
 * 
 * 
    var input = [
        1, 2, 3,
        [4],
        [5, 6, [7], [8, [9, [10]]]],
        11, 12, 13,
        [14, [[[[[15, [16]]]]]]],
        17, 18,
        [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
    ];

    var flatArray = input.flatten();
    // flatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
 *
 */

// Solution

/** var themes = []; themes.flatten(); */

var input = [
    1,
    2,
    3,
    [4],
    [5, 6, [7], [8, [9, [10]]]],
    11,
    12,
    13,
    [14, [[[[[15, [16]]]]]]],
    17,
    18,
    [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

/** Solution 1 */
function flatten() {
    /**
     * Loop over the array: 0 -- arr.length
     * if currentElement is an array
     *  do some processing
     * else
     *  use the currentElement directly
     */

    const output = [];

    function processing(arr) {
        /**
         * input: [1,2,[3]]
         * 0: 1 -> [1]
         * 1: 2 -> [1,2]
         * 2: [3] -> processing([3]) -> 0 - length -> [1,2,3]
         */
        for (let i = 0; i < arr.length; i++) {
            const currentElement = arr[i];

            if (Array.isArray(currentElement)) {
                processing(currentElement);
            } else {
                output.push(currentElement);
            }
        }
    }

    processing(this);
    return output;
}

/** Solution 2 */
// function flatIt() {
//     return this.toString()
//         .split(",")
//         .map((el) => Number(el));
// }

Array.prototype.flatten = flatten;
console.log(input.flatten());
