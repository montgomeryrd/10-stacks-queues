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
            expect(() => {
                [...Array(10000)].map((e, i) => this.stack.push(~~(Math.random() * i)));
            }).toThrow();
        });
    });

    describe('#pop', () => {

    });

    describe('#peek', () => {

    });
});