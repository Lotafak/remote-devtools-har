'use strict'

const Readable = require('stream').Readable

// source is an object with readStop() and readStart() methods,
// and an `ondata` member that gets called when it has data, and
// an `onend` member that gets called when the data is over.

/**
* @class
*/
class HarReadStream extends Readable {
  /**
  * @constructor
  */
  constructor (options) {
    super(options)

    this._source = ''
  }

  // _read will be called when the stream wants to pull more data in
  // the advisory size argument is ignored in this case.
  _read (size) {
    // nop but nessesary
  }

  append (inStr) {
    // Buffer.from(inStr, 'ascii');
    this.push(inStr)
  }
}

module.exports = HarReadStream