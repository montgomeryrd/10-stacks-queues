'use strict';

const Node = require('./node');

class Queue {
    constructor(maxSize = 1337) {
        this.front = null;
        this.maxSize = maxSize;
        this.size = 0;
        return this;
    }

    enqueue(val) {
        if(!val) return null;
        if(this.size === this.maxSize) throw new Error('Queue is full.');

        let node = new Node(val);

        if(!this.front) {
            this.front = node;
            this.size++;
            return this;
        }

    }

    dequeue() {
        if(this.front === null) throw new Error('Queue is empty.');

        let remove = this.front;
        this.front = remove.next;
        remove.next = null;
        this.size--;
        return this.front;
    }

    peek() {
        return this.front;
    }
}

module.exports = Queue;