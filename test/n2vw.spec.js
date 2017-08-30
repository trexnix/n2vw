/* global describe, it, before */

import chai from 'chai';
import n2vw from '../lib/n2vw.js';

chai.expect();

const expect = chai.expect;

describe('Given an instance of n2vw library', () => {
  it('should return the name', () => {
    expect(n2vw).to.be.exist;
  });
});
