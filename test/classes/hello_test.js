import chai from 'chai';
import 'chai/register-should';
import 'chai/register-expect';

// Import functions
import Hello from '../../src/classes/Hello';

let hello = new Hello('Hello World');

describe('Hello Class', function () {
    describe('render()', function () {
        it ('Should log the passed Message', function () {
            expect(hello.render()).to.equal(console.warn('Hello World'));
        });
    });
});