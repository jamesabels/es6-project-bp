import chai from 'chai';
import 'chai/register-should';
import 'chai/register-expect';
var Browser = require('zombie');

Browser.localhost('localhost', 9000);

describe('Home Page', function() {

    let browser = new Browser();
        
    before(function(done) {
        browser.visit('/', done);
    });

    it('Should load successfully', function (done) {
        browser.assert.success();
        done();
    });

    it ('Should have a universal form', function (done) {
        browser.assert.element('#new-comp-wrap');
        browser.assert.hasClass('#new-comp-wrap', 'new-comp');
        browser.assert.element('#new-comp-wrap');
        browser.assert.hasClass('#new-comp-wrap', 'new-comp');
        browser.assert.element('#universal-form');
        browser.assert.hasClass('#universal-form', 'form-group');
        browser.assert.elements('form label.form-label', { atLeast: 1 });
        browser.assert.elements('form input.form-input', { atLeast: 1 });
        browser.assert.elements('form input[type="submit"].form-input.btn.btn-primary.input-group-btn.universal-form-input', 1);
        done();
    });

    it ('Should have a first name input', function(done) {
        browser.assert.element('form label#firstName-label');
        browser.assert.element('form input[name="first_name"]');
        done();
    });

    it ('First Name should be typeable', function(done) {
        browser.fill('form input[name="first_name"]', 'Steve');
        done();
    });

    it ('Should have a last name input', function(done) {
        browser.assert.element('form label#lastName-label');
        browser.assert.element('form input[name="last_name"]');
        done();
    });

    it ('Last Name should be typeable', function(done) {
        browser.fill('form input[name="last_name"]', 'Dave');
        done();
    });

    it ('Age should be typeable', function(done) {
        browser.fill('form input[name="age"]', 35);
        done();
    });

    it ('Homepage should be typeable', function(done) {
        browser.fill('form input[name="homepage"]', 'http://www.google.com');
        done();
    });

    it ('Email should be typeable', function(done) {
        browser.fill('form input[name="email"]', 'dave@steve.com');
        done();
    });

    it ('Phone Number should be typeable', function(done) {
        browser.fill('form input[name="phone_number"]', '(123)456-7890');
        done();
    });

    it ('Phone Number should be typeable', function(done) {
        browser.fill('form input[name="phone_number"]', '(123)456-7890');
        done();
    });

});
