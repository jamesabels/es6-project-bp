/* eslint-disable */

import chai from 'chai';
import 'chai/register-should';
import 'chai/register-expect';

// Import functions
import helloWorld from '../index';

describe('Hello World', function () {
    it ('Should log the passed Message', function () {
        expect(helloWorld('Hello World')).to.equal(console.log('Hello World'));
    });
});