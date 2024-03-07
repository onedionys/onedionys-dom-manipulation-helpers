const assert = require('assert');
const { addClass, removeClass, toggleClass } = require('../src/domManipulationHelpers');

describe('DOM Manipulation Helpers', function() {
    describe('#addClass()', function() {
        it('should add a class to an element', function() {
            const element = document.createElement('div');
            addClass(element, 'test-class');
            assert.strictEqual(element.classList.contains('test-class'), true);
        });
    });

    describe('#removeClass()', function() {
        it('should remove a class from an element', function() {
            const element = document.createElement('div');
            element.classList.add('test-class');
            removeClass(element, 'test-class');
            assert.strictEqual(element.classList.contains('test-class'), false);
        });
    });

    describe('#toggleClass()', function() {
        it('should toggle a class on an element', function() {
            const element = document.createElement('div');
            toggleClass(element, 'test-class');
            assert.strictEqual(element.classList.contains('test-class'), true);
            toggleClass(element, 'test-class');
            assert.strictEqual(element.classList.contains('test-class'), false);
        });
    });
});
