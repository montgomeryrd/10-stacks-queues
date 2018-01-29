'use strict';

const Queue = require('../lib/queue');
require('jest');

describe('queue module', () => {
    beforeEach(() => this.queue = new Queue());
    
    describe('#queue', () => {
        it('should be an instance of a queue', () => {
            expect(this.queue).toBeInstanceOf(Queue);
        });
        it('should have a max size of 1337', () => {
            expect(this.queue.maxSize).toEqual(1337);
        });
        it('should have a null value after being instantiated', () => {
            expect(this.queue.front).toBeNull();
        });
    });

    describe('#enqueue', () => {
        it('should increment in size using enqueue', () => {
            this.queue.enqueue('canadian bacon');
            expect(this.queue.size).toEqual(1);
            this.queue.enqueue('salami');
            this.queue.enqueue('pepperoni');
            this.queue.enqueue('mayonaise');
            this.queue.enqueue('pepperjack');
            expect(this.queue.size).toEqual(5);
        });
    });

    describe('#dequeue', () => {
        it('should decrement in size using enqueue', () => {
            this.queue.enqueue('canadian bacon');
            this.queue.enqueue('salami');
            this.queue.enqueue('pepperoni');
            this.queue.enqueue('mayonaise');
            this.queue.enqueue('pepperjack');

            this.queue.dequeue('canadian bacon');
            expect(this.queue.size).toEqual(4);
            this.queue.dequeue('pepperoni');
            this.queue.dequeue('mayonaise');
            expect(this.queue.size).toEqual(2);
        });
    });

    describe('#peek', () => {
        it('should return what is at the front of the queue', () => {
            this.queue.enqueue('salami');
            this.queue.enqueue('pepperoni');
            this.queue.enqueue('mayonaise');
            expect(this.queue.peek()).toEqual(this.queue.front);
        });

    });
});