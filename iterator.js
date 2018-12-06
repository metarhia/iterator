'use strict';

const {
  Iterator,
  iter,
  iterEntries,
  iterKeys,
  iterValues,
} = require('./lib/iterator');

module.exports = {
  Iterator,
  iter,
  iterEntries,
  iterKeys,
  iterValues,
};

const nodeVersion = parseInt(process.version.slice(1, 3));
if (nodeVersion >= 10) {
  const { AsyncIterator, asyncIter } = require('./lib/async-iterator');

  module.exports.AsyncIterator = AsyncIterator;
  module.exports.asyncIter = asyncIter;
}
