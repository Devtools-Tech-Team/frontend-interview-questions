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
 * Question: Implement the following code so that when interviewer calls vDocument.render()
 * then following HTML structure should be printed.
 *
 * const vDocument = new VDocument();
 * const body = vDocument.createElement("body");
 * const div = vDocument.createElement("div");
 *
 * div.innerHTML = "Hello, I am a div!";
 *
 * body.appendChild(div);
 * vDocument.appendChild(body);
 *
 * vDocument.render();
 *
 * Output:
 * <html>
 * 		<body>
 * 			<div>
 * 				Hello, I am a div!
 * 			</div>
 * 		<body>
 * </html>
 */

// Solution
const INDENT_SIZE = 4;
const getSpaces = (length) => {
    return new Array(length).fill(" ").join("");
};

class Node {
    constructor(name) {
        this.name = name;
        this.innerHTML = "";
        this.children = [];
    }
    appendChild(node) {
        this.children.push(node);
    }
}

class VDocument extends Node {
    constructor() {
        super("html");
    }

    createElement(nodeName) {
        return new Node(nodeName);
    }
    render() {
        function printTree(currentNode, currentLevel) {
            // calculating the prefix spaces for current level
            const spaces = getSpaces(currentLevel * INDENT_SIZE);

            let output = "";

            // opening tag
            output += `${spaces}<${currentNode.name}>\n`;

            // innerHTML handling
            if (currentNode.innerHTML) {
                output += `${spaces}${getSpaces(INDENT_SIZE)}${
                    currentNode.innerHTML
                }\n`;
            }

            // loop for children
            for (let i = 0; i < currentNode.children.length; i++) {
                output += printTree(currentNode.children[i], currentLevel + 1);
            }

            // closing tag
            output += `${spaces}</${currentNode.name}>\n`;

            return output;
        }

        console.log(printTree(this, 0));
    }
}

const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);

// Dynamic Insertion by the interviewer
/*
	const div1 = vDocument.createElement("div");
	const div2 = vDocument.createElement("div");
	div1.innerHTML = "Hello, I am a div 1!";
	div2.innerHTML = "Hello, I am a div 2!";
	div.appendChild(div1);
	body.appendChild(div2);
*/

vDocument.appendChild(body);

vDocument.render();
