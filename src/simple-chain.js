const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.arr.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if (value === '') this.arr.push(' ');
    else if (value === null) this.arr.push('null');
    else this.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if (typeof position != "number" || !Number.isInteger(position) || position<=0 || position >= this.arr.length) {
      this.arr=[];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.arr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // this.arr_tmp=this.arr.slice();
    this.res = '( ' + this.arr.join(' )~~( ') + ' )';
    this.arr = [];
    return this.res;
  },
  arr: [],
};

module.exports = {
  chainMaker
};

chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();//, '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(); //, '( 3rd )~~( function () { } )');
// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(); //, '( 3rd )~~( function () { } )');