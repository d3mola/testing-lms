const assert = require('assert');
const XO = require('./index');

describe('Basic Mocha String Test', () => {

  it('should return true if the number of Xs and Os are equal', () => {
    assert.equal(XO('ooxx'), true);
    assert.equal(XO('XocnsXo'), true);
    assert.equal(XO('XoooxxXo'), true);
    assert.equal(XO('XoXo'), true);
  });

  it('should return false if the number of Xs and Os are not equal', () => {
    assert.equal(XO('xxxOooooo'), false);
    assert.equal(XO('xxxx000O'), false);
  });

  it('should return true if no Xs and Os are present', () => {
    assert.equal(XO('wdjewfhkYU'), true);
    assert.equal(XO(''), true);
  });

  it('should return an error if no argument is provided', () => {
    assert.equal(XO(), 'Please pass in the word to be tested');
  });

  it('should return an error if input is not a string is not provided', () => {
    assert.equal(XO(642), 'Argument should be a string');
  });
});
