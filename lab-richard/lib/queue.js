'use strict';

const Node = require('./node');

class Queue {
    constructor(maxSize = 1337) {
        this.front = null;
        this.back = null;
        this.maxSize = maxSize;
        this.size = 0;
        return this;
    }

    enqueue(val) {
        if(!val) return null;
        if(this.size === this.maxSize) return new Error('Queue is full.');

        let node = new Node(val);

        if(this.back) this.back.next = node;
        if(!this.front) this.front = node;

        this.back = node;
        this.size++;

        return this.front;
    }

    dequeue() {
        if(this.front === null) return new Error('Queue is empty.');

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