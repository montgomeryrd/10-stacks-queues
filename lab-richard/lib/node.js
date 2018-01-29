'use strict';

class Node {
    constructor(val) {
        if(!val) return new Error('Value must be passed as argument');

        this.val = val;
        this.next = null;
    }
}

module.exports = Node;