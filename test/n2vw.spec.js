/* global describe, it, before */

import chai from 'chai';
import Converter from '../lib/n2vw.js';

chai.expect();

const expect = chai.expect;

describe('Given an instance of n2vw library', () => {
  describe('.breakIntoGroupOfThree', () => {
    it('should break the number string into groups of three number', () => {
      expect(Converter.breakIntoGroupOfThree('99')).to.be.eql(['99']);
      expect(Converter.breakIntoGroupOfThree('1234567')).to.be.eql(['1', '234', '567']);
    });
  });

  describe('.mapGroupsToUnits', () => {
    it('should groups of three number to respective units based on their places', () => {
      expect(Converter.mapGroupsToUnits(['123'])).to.be.eql(['']);
      expect(Converter.mapGroupsToUnits(['1', '234', '567'])).to.be.eql(['triệu', 'nghìn', '']);
    });
  });

  describe('.translateThreeDigitsNumberToWords', () => {
    it('should throw error if argument is invalid', () => {
      expect(() => {
        Converter.translateThreeDigitsNumberToWords(1234);
      }).to.throw();
    });

    it('should translate it properly', () => {
      expect(Converter.translateThreeDigitsNumberToWords(5)).to.be.eql('năm');
      expect(Converter.translateThreeDigitsNumberToWords(10)).to.be.eql('mười');
      expect(Converter.translateThreeDigitsNumberToWords(12)).to.be.eql('mười hai');
      expect(Converter.translateThreeDigitsNumberToWords(15)).to.be.eql('mười lăm');
      expect(Converter.translateThreeDigitsNumberToWords(20)).to.be.eql('hai mươi');
      expect(Converter.translateThreeDigitsNumberToWords(99)).to.be.eql('chín mươi chín');
      expect(Converter.translateThreeDigitsNumberToWords(100)).to.be.eql('một trăm');
      expect(Converter.translateThreeDigitsNumberToWords(101)).to.be.eql('một trăm lẻ một');
      expect(Converter.translateThreeDigitsNumberToWords(999)).to.be.eql('chín trăm chín mươi chín');
    })
  });

  describe('#getFullText', () => {
    it('should convert a number to words', () => {
      let converter = new Converter;
      expect(converter.getFullText(99)).to.be.eql('chín mươi chín');
      expect(converter.getFullText(123456)).to.be.eql('một trăm hai mươi ba nghìn, bốn trăm năm mươi sáu');
      expect(converter.getFullText(9987654321)).to.be.eql('chín tỉ, chín trăm tám mươi bảy triệu, sáu trăm năm mươi bốn nghìn, ba trăm hai mươi mốt');
    });
  });
});
