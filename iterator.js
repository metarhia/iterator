'use strict';

const {
  Iterator,
  iter,
  iterEntries,
  iterKeys,
  iterValues,
} = require('./lib/iterator');
const { AsyncIterator, asyncIter } = require('./lib/async-iterator');

module.exports = {
  Iterator,
  iter,
  iterEntries,
  iterKeys,
  iterValues,
  AsyncIterator,
  asyncIter,
};
