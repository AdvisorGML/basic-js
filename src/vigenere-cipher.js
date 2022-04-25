const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {

  alfavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(type = true) {
    this.type = type
  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = [];
    let m = message.toUpperCase().split('');
    let k = [];
    let k_key = key;
    if (key.length < message.length) {
      for (let i = 0; i < Math.ceil(message.length / key.length); i++) {
        k_key += key;
      }
    }
    k = k_key.toUpperCase().split('');
    for (let i = 0; i < m.length; i++) {
      if (!this.alfavit.includes(m[i])) {
        k.splice(i, 0, " ");
      }
    }
    k = k.splice(0, m.length);
    for (let i = 0; i < m.length; i++) {
      let P = this.alfavit.indexOf(m[i]);
      if (P == -1) {
        res[i] = m[i];
        continue;
      }
      let K = this.alfavit.indexOf(k[i]);
      let index = (P + K) % 26;
      res[i] = this.alfavit[index];
    }
    return (this.type) ? res.join('') : res.reverse().join((''));
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = [];
    let m = message.toUpperCase().split('');
    let k = [];
    let k_key = key;
    if (key.length < message.length) {
      for (let i = 0; i < Math.ceil(message.length / key.length); i++) {
        k_key += key;
      }
    }
    k = k_key.toUpperCase().split('');
    for (let i = 0; i < m.length; i++) {
      if (!this.alfavit.includes(m[i])) {
        k.splice(i, 0, " ");
      }
    }
    k = k.splice(0, m.length);
    for (let i = 0; i < m.length; i++) {
      let P = this.alfavit.indexOf(m[i]);
      if (P == -1) {
        res[i] = m[i];
        continue;
      }
      let K = this.alfavit.indexOf(k[i]);
      let index = (P - K + 26) % 26;
      res[i] = this.alfavit[index];
    }
    return (this.type) ? res.join('') : res.reverse().join((''));

  }
}

module.exports = {
  VigenereCipheringMachine
};
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

// directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'); //'LEARN FRONTEND DEVELOPMENT :)')
// directMachine.encrypt('attack at dawn!', 'alphonse'); // => 'AEIHQX SX DLLU!'
// directMachine.encrypt('cryptography', 'verylongkeyword');//, 'XVPNECTXKTFU')
// directMachine.encrypt('@(', 'KG'); // => 'AEIHQX SX DLLU!'
// const encrypted = directMachine.encrypt('NX,','RKLG');
// console.log(directMachine.decrypt(encrypted, 'RKLG'));