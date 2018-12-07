const {getResult} = require('../src/combinationsLibrary');
const {deepEqual} = require('assert');

describe('Get Result',function(){
  it('should give all the possible combinations with the digits of the number to get the required value',function(){
    deepEqual(getResult({num:'123',value:'5'}),[ '1*2+3' ]); 
  });
});

