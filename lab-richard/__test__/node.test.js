'use strict';

const Node = require('../lib/node');
require('jest');

describe('node module', () => {
    it('should return an error when instantiating a node without a value', () => {
        expect(new Node()).toBeInstanceOf(Error);
    });
    it('should create a node with the value: \'I\'m Ants in My Eyes, Johnson\'', () => {
        expect(new Node('I\'m Ants in My Eyes, Johnson')).toEqual({'next': null, 'val': 'I\'m Ants in My Eyes, Johnson'});
    });
});
