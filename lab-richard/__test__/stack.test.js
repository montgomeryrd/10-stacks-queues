'use strict';

const Stack = require('../lib/stack');
require('jest');

describe('stack module', () => {
    beforeEach(() => this.stack = new Stack());
    describe('#push', () => {
        it('should have a size of 10', () => {
            [...Array(10)].map((e, i) => this.stack.push(~~(Math.random() * i)));
            expect(this.stack.size).toEqual(10);
        });

        it('should add a new node with the val of 2 to the top of the stack', () => {
            this.stack.push(2);
            expect(this.stack.top.val).toEqual(2);
        });

        it('should throw and error when the maxSize is met', () => {
            [...Array(1338)].map((e, i) => this.stack.push(~~(Math.random() * i)));
            expect(this.stack.size).toEqual(1337);
        });
    });

    describe('#pop', () => {
        it('should remove one element from a stack of 10 each time the user calls pop() on the stack', () => {
            [...Array(10)].map((e, i) => this.stack.push(~~(Math.random() * i)));
            this.stack.pop();
            expect(this.stack.size).toEqual(9);
            this.stack.pop();
            expect(this.stack.size).toEqual(8);
            this.stack.pop();
            expect(this.stack.size).toEqual(7);
        });
    });

    describe('#peek', () => {
        it('should return what is on top of the stack', () => {
            [...Array(10)].map((e, i) => this.stack.push(~~(Math.random() * i)));
            expect(this.stack.peek()).toEqual(this.stack.top);
        });

    });
});